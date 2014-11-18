This nodejs application will publish on facebook, twitter and send email for all registered user.
Registered list is kept in a mongodb database running on the same host.

In order to use this application, you need to create a file named config.js with the following contents:
```
module.exports = {
    facebook: {
	token:'FILL_ME' // application token see https://developers.facebook.com/docs/facebook-login/access-tokens
    },
    mail: {
	from: 'FILL_ME', // default sender
	to: 'FILL_ME', // default destination
	subject: 'FILL_ME', // default subject
	body: ''
    },
    smtp: {
	host: 'FILL_ME', // SMTP host
	port: 465, // SMTP port
	secure: true, // set to true if using SSL,
	debug: true,
	auth: {
	    user: 'FILL_ME', // SMTP user login
	    pass: 'FILL_ME' // SMTP user password
	}
    },
    twitter: {
		// see https://apps.twitter.com
		// and http://www.apcoder.com/2013/10/03/twitter-bot-20-minutes-node-js/
	consumer_key: 'FILL_ME',
	consumer_secret: 'FILL_ME',
	access_token: 'FILL_ME',
	access_token_secret: 'FILL_ME'
    }
};
```

A Dockerfile is provided to easily generate container providing this application dependencies
