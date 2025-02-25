const nodemailer = require("nodemailer");
const EmailTemplates = require("../emailTemp/index");
const handlebars = require("handlebars");

const sendmail = async (email, replacements, template) => {
  try {
    if (!EmailTemplates[template]) {
      throw new Error(`Template "${template}" not found!`);
    }

    const t = handlebars.compile(EmailTemplates[template].html);

    const htmlToSend = t(replacements);
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: EmailTemplates[template].subject,
      html: htmlToSend,
    });
    console.log("Email sent successfully to:", email);
  } catch (error) {
    console.log(error, "Email not sent");
  }
};

module.exports = sendmail;
