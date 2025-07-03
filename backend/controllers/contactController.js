const Message = require('../models/Message');
const nodemailer = require('nodemailer');

exports.handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  console.log("📩 Incoming Form Data:", req.body); // Debug log

  try {
    // Save to DB
    const newMsg = new Message({ name, email, message });
    const saved = await newMsg.save();
    console.log("✅ Saved to DB:", saved); // Debug log

    // Send Email
 const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false   // ✅ This line fixes the certificate issue
  }
});


    const emailResult = await transporter.sendMail({
      from: email,
      to: process.env.TO_EMAIL,
      subject: `📬 New Contact Message from ${name}`,
      text: message
    });

    console.log("📧 Email sent:", emailResult); // Debug log

    res.status(200).json({ success: true, message: 'Message saved and email sent!' });
  } catch (err) {
    console.error("❌ SERVER ERROR:", err); // Log exact error
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
