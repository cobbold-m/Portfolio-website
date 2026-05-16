import express from 'express';

const router = express.Router();

/**
 * POST /api/contact
 * Receives a contact form submission: { name, email, message }
 *
 * TODO: To wire up real email sending with Nodemailer, follow these steps:
 *   1. npm install nodemailer (already in package.json)
 *   2. Create a .env file in /server with:
 *        EMAIL_USER=your.email@gmail.com
 *        EMAIL_PASS=your_app_password   (use a Gmail App Password, not your main password)
 *        EMAIL_TO=your.email@gmail.com
 *   3. Uncomment the nodemailer block below and install dotenv: npm install dotenv
 *   4. Add `import 'dotenv/config';` at the top of server/index.js
 */

// --- Nodemailer setup (uncomment when ready) ---
//
// import nodemailer from 'nodemailer';
//
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });
//
// async function sendContactEmail({ name, email, message }) {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_TO,
//     subject: `Portfolio Contact: Message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     html: `
//       <h3>New Portfolio Contact Message</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong></p>
//       <p>${message.replace(/\n/g, '<br>')}</p>
//     `,
//   };
//   return transporter.sendMail(mailOptions);
// }

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields (name, email, message) are required.',
    });
  }

  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
  }

  // Log the submission (always — useful for debugging)
  console.log('\n--- New Contact Form Submission ---');
  console.log(`Name:    ${name}`);
  console.log(`Email:   ${email}`);
  console.log(`Message: ${message}`);
  console.log('-----------------------------------\n');

  try {
    // TODO: Uncomment this block once nodemailer is configured above
    // await sendContactEmail({ name, email, message });

    res.status(200).json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    });
  } catch (err) {
    console.error('Error processing contact form:', err);
    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again later.',
    });
  }
});

export default router;
