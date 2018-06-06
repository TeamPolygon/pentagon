const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')

/*
 * This module configures different Passport Strategies.
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
	console.log('profile', profile)
}));
