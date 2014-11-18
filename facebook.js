var https = require('https');

exports.post = function(str, token, cb) {
    var req = https.request({
	host: 'graph.facebook.com',
	path: '/me/feed',
	method: 'POST'
    }, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(chunk) {
	    console.log('got chunk ' + chunk);
	});
	res.on('end', function() {
	    console.log('response end with status ' + res.status);
	});
    });
    req.end('message='+encodeURIComponent(str)
	    +'&access_token='+encodeURIComponent(token));
    console.log('sent');
};

