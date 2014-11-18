var mailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('../config');

var transport = mailer.createTransport(smtpTransport(config.smtp));

transport.sendMail({
    from: config.mail.from,
    to: 'p.tisserand@gmail.com',
    subject: config.mail.subject,
    text: 'Hello my friend'
});

