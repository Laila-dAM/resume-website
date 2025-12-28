const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (data) => {
  const mailOptions = {
    from: data.email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${data.name}`,
    text: data.message,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
