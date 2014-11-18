var Twit = require('twit')
var config = require('../config')

var T = new Twit(config.twitter);

T.post('statuses/update', { status: 'post from nodejs' }, function(err, data, response) {
    console.log(data);
});
