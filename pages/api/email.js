const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'goranilicilke893@gmail.com',
    subject: "Welcome to Goran's app!",
    html: `<strong>Welcome to my blog ${name} 😀 😀 😀,feel free to write me your impressions.Thank you.</strong>`,
  });
};
module.exports = {
  sendWelcomeEmail,
};
