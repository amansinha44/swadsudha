import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 1. Sirf POST request allow karein
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    // 2. Frontend se aaya hua data nikalein
    const { customer, items, totalAmount } = req.body;

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