const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys')

/*
 * This module configures different oAuth Passport Strategies.
 */

 // Google Strategy
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


// Facebook Strategy
passport.use(new FacebookStrategy({
	clientID: keys.facebook.client_id,
	clientSecret: keys.facebook.client_secret,
	callbackURL: '/auth/facebook/callback',
	profileFields: ['id', 'displayName', 'photos', 'email']
}, (accessToken, refreshToken, profile, cb) => {
	console.log(accessToken);
	console.log(refreshToken);
	console.log(profile);
})) 
