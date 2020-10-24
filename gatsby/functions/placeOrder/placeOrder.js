const nodemailer = require('nodemailer');

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  // TEST SEND EMAIL
  const body = JSON.parse(event.body);

  const requiredFields = ['email', 'name', 'order'];

  for (const field of requiredFields) {
    console.log(`Checking that ${field} is good`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops, you are missing the ${field} field`,
        }),
      };
    }
  }

  const info = await transporter.sendMail({
    from: "Dean's Dough <dean@example.com>",
    to: 'orders@example.com',
    subject: 'New Order!',
    html: `<p>Your Pizza order is here!</p>`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
