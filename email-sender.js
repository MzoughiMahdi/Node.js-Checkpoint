const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'domdommzoughi@gmail.com',
        pass: 'PassWord'
    }
});

const mailOptions = {
    from: 'mahdimzoughi93@gmail.com',
    to: 'domdommzoughi@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hello from Node.js!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
