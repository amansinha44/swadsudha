import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 1. Sirf POST request allow karein
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    // 2. Frontend se aaya hua data nikalein
    const { customer, items, totalAmount } = req.body;

    // ==========================================
    // 🔴 BACKEND SECURITY & STRICT VALIDATION
    // ==========================================

    // A. Check Basic Data Exists
    if (!customer || !items || totalAmount === undefined) {
      return res.status(400).json({ success: false, message: 'Incomplete order data received.' });
    }

    const { name, phone, email, address } = customer;

    // B. Cart & Items Validation (Khali cart ya 12 se jyada items block karein)
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Cart is empty. Cannot process order.' });
    }
    for (let item of items) {
      if (!item.qty || item.qty < 1 || item.qty > 12) {
        return res.status(400).json({ success: false, message: `Invalid quantity for ${item.name}. Maximum 12 allowed per item.` });
      }
    }

    // C. Name Validation (Sirf A-Z aur spaces, min 3 chars)
    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    if (!name || !nameRegex.test(name)) {
      return res.status(400).json({ success: false, message: 'Invalid Name. Only letters and spaces allowed (Min 3 chars).' });
    }

    // D. Phone Validation (Sirf 10 numbers, 6,7,8,9 se shuru)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone || !phoneRegex.test(phone)) {
      return res.status(400).json({ success: false, message: 'Invalid Phone Number. Must be exactly 10 digits.' });
    }

    // E. Address Validation (Min 10 chars)
    if (!address || address.length < 10 || address.length > 200) {
      return res.status(400).json({ success: false, message: 'Invalid Address. Must be between 10 and 200 characters.' });
    }

    // F. Email Validation (Optional hai, par agar ho to sahi format me ho)
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid Email Address format.' });
      }
    }

    // ==========================================
    // ✅ EMAIL SENDING LOGIC (Agar upar sab pass ho gaya)
    // ==========================================

    // 3. Hostinger SMTP Setup
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Environment variable se email lenge
        pass: process.env.EMAIL_PASS, // Environment variable se password lenge
      },
    });

    // 4. Order ki list text me convert karein
    const orderItemsText = items.map(item => `- ${item.name} (x${item.qty}): ₹${item.price * item.qty}`).join('\n');

    // 5. Email bhejne ki details
    const mailOptions = {
      from: `"Swad Sudha Orders" <${process.env.EMAIL_USER}>`, // Sender address
      to: 'query@swadsudha.in', // Jis par aapko order receive karna hai
      subject: `🚀 New Order Received from ${customer.name}`,
      text: `Hello Swad Sudha Team,\n\nA new order has just arrived!\n\n-- CUSTOMER DETAILS --\nName: ${customer.name}\nPhone: ${customer.phone}\nEmail: ${customer.email || 'N/A'}\nAddress: ${customer.address}\nLandmark: ${customer.landmark || 'N/A'}\n\n-- ORDER ITEMS --\n${orderItemsText}\n\nTOTAL AMOUNT: ₹${totalAmount}\nPayment Method: Cash/UPI on Delivery\n`
    };

    // 6. Email Send karein
    await transporter.sendMail(mailOptions);

    // 7. Frontend ko Success message bhejein
    return res.status(200).json({ success: true, message: 'Order placed successfully!' });

  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ success: false, message: 'Failed to send order email.', error: error.message });
  }
}