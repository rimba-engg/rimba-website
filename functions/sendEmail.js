const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return { statusCode: 400, body: "All fields are required" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail", // Or your preferred email provider
    auth: {
      user: process.env.EMAIL_USER, // Set this in Netlify environment variables
      pass: process.env.EMAIL_PASS, // Set this in Netlify environment variables
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "lokeshdanu9@gmail.com", // reciepient
    subject: `Demo Request from ${name}`,
    text: `You received a demo request from:
           Name: ${name}
           Email: ${email}
           Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { statusCode: 500, body: "Failed to send email" };
  }
};
