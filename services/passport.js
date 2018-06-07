const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const FacebookStrategy = require('passport-facebook').Strategy;
const Hashes = require('jshashes');
const keys = require('../config/keys');
const User = mongoose.model('users');


/*
 * This module configures different oAuth Passport Strategies.
 */


/*
 * This function creates a new user in the database who registered
 * through Google oAuth.
 * Input: json
 */

 function create_user(id, name, provider) {
 	console.log(id);
 	new User({id, name, provider}).save();
 }


// Google Strategy
passport.use(new GoogleStrategy({
	clientID: keys.google.client_id,
	clientSecret: keys.google.client_secret,
	callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {

	/*
	 * the accessToken is the response code we recieve from google,
	 * refreshToken is used to restore a session and profile contains
	 * the information about the user and we use this to retrieve a
	 * user from our mongoDB. If the user doesn't exist, we create one.
	 */

	 //generating unique hash for the profile
	 const unique_hash = new Hashes.SHA1().b64(profile.id);
	 console.log(profile);
	// console.log(unique_hash);
	 User.findOne({user_id: unique_hash}).then((existingUser) => {
	 	if (existingUser) {
	 		console.log(existingUser);
	 	} else {
	 		create_user(unique_hash, profile.displayName, profile.provider);
	 	}
	 });
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
