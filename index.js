const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

/*
 * Starting the express app
 */
const app = express();


/*
 * Configuring Passport Strategies.
 */

 // Google oAuth strategy
passport.use(new GoogleStrategy({
	clientID: keys.google.client_id,
	clientSecret: keys.google.client_secret,
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
	// the access token is the response code we recieve from google
	console.log(accessToken)
	console.log(refreshToken)
	console.log(profile)
}));


/* 
 * Configuring routes 
 */

// Google oAuth end-point
app.get('/auth/google', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));
/*
 * Configuring the listening port.
 */
const port = process.env.PORT || 5000;
app.listen(port)


