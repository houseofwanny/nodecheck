let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myMail@gmail.com',
    pass: 'generated password'
  }
});

let mailOptions = {
  from: 'myMail@gmail',
  to: 'receiverOne,receiverTwo@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was  not easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});