var express = require('express');
var facebook = require('./facebook');
var mail = require('./mail');
var config = require('./config');
var twitter = require('./twitter');

var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var monk = require('monk');
var db = monk('localhost:27017/codestarter');

app.use(function(req, res, next){
    req.db = db;
    next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/list', function(req, res) {
    var db = req.db;
    var collection = db.get('pledge');
    var toto = [""];
    collection.find({}, ['company', '-_id'], function(e, docs) {
	console.log(docs)
	res.send(docs)
    });
});

app.post('/pledge', function(req, res) {
    console.log(req.body);
    facebook.post(req.body.company + ' joined campaign!!', config.facebook.token);
    mail.sendMail(config.mail.from, 
		  config.mail.to,
		  config.mail.subject,
		  req.body.company + ' ( ' + req.body.email + ' ) joined campaign!!!',
		  config.smtp);
    twitter.post(req.body.company + ' joined campaign!!', config.twitter);
    // insert into DB ...
    var db = req.db;
    db.get('pledge').insert({email: req.body.email, company: req.body.company}, function(err, result) {
	res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

app.listen(4242);
