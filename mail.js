var mailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

exports.sendMail = function(from, to, subject, text, options) {
    var transport = mailer.createTransport(smtpTransport(options));
    transport.sendMail({
	from: from,
	to: to,
	subject: subject,
	text: text});
}

