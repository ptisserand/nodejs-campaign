var Twit = require('twit');

exports.post = function(status, config, cb) {
    var T = new Twit(config);
    T.post('statuses/update', { status: status }, function(err, data, response) {
	console.log(data);
    });
};

