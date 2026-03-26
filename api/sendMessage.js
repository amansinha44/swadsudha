import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    // Frontend se data receive karein
    const { name, email, phone, message, source } = req.body;

    // ==========================================
    // 🔴 BACKEND SECURITY & VALIDATION (STRICT)
    // ==========================================

    // 1. Check for empty fields (Koi field khali to nahi?)
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // 2. Name Validation (Sirf A-Z aur spaces, min 3 chars)
    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    if (!nameRegex.test(name)) {
      return res.status(400).json({ success: false, message: 'Invalid Name. Only letters and spaces allowed (Min 3 chars).' });
    }

    // 3. Phone Validation (Sirf 10 numbers, 6,7,8,9 se shuru)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ success: false, message: 'Invalid Phone Number. Must be exactly 10 digits.' });
    }

    // 4. Email Validation (Basic email format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Invalid Email Address.' });
    }

    // 5. Message Validation (Min 10, Max 500 chars)
    if (message.length < 10 || message.length > 500) {
      return res.status(400).json({ success: false, message: 'Message must be between 10 and 500 characters long.' });
    }

    // ==========================================
    // ✅ EMAIL SENDING LOGIC (Agar sab sahi hai)
    // ==========================================

    // Hostinger SMTP Setup
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Email format setup
    const mailOptions = {
      from: `"Swad Sudha Queries" <${process.env.EMAIL_USER}>`, 
      to: 'query@swadsudha.in', 
      subject: `📬 New Inquiry from ${name} (${source || 'Website'})`,
      text: `Hello Swad Sudha Team,\n\nAapko ek naya message mila hai (${source || 'Website'} se):\n\n-- SENDER DETAILS --\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n-- MESSAGE --\n${message}\n`
    };

    // Email bhej dein
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error("Message sending error:", error);
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
}