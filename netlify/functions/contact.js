console.log('hello from contact js');

const nodemailer = require('nodemailer');
const querystring = require('querystring');
const validator = require('validator');

exports.handler = async (event, context) => {
  try {
    const parsedBody = querystring.parse(event.body);
    const { reason, name, email, message, phone } = {
        reason: validator.escape(parsedBody.reason),
        name: validator.trim(validator.escape(parsedBody.name)),
        email: validator.normalizeEmail(parsedBody.email),
        message: validator.trim(validator.escape(parsedBody.message)),
        phone: validator.trim(validator.escape(parsedBody.phone)),
      };

    // Create a transporter using Gmail's SMTP
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'stevenmarks75@gmail.com',
        pass: 'mskr kfgy yobi mdki' // Use the app password here
      }
    });

    // Set up email data
    let mailOptions = {
        from: email, 
        to: 'homestartcravenmanager@gmail.com',
        subject: `New contact form submission from ${name}`,
        html: `
          <h2>You have a new contact form submission</h2>
          <p><strong>Reason:</strong> ${reason}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };
      

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 302,
      headers: {
        Location: '/thank-you',
      },
      body: JSON.stringify({ message: 'Email sent successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message })
    };
  }
};
