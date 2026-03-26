import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    // Frontend se data receive karein
    const { name, email, phone, message, source } = req.body;

    // Hostinger SMTP (Ye same wahi hai jo Order me use kiya tha)
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
      to: 'query@swadsudha.in', // Yahan message receive hoga
      subject: `📬 New Inquiry from ${name} (${source})`,
      text: `Hello Swad Sudha Team,\n\nAapko ek naya message mila hai (${source} se):\n\n-- SENDER DETAILS --\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n-- MESSAGE --\n${message}\n`
    };

    // Email bhej dein
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error("Message sending error:", error);
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
}