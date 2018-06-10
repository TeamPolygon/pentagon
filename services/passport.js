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

//Defining serialization for the user logged-in
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// Defining deserialization for the user logged-in
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	})
})


// Google Strategy
passport.use(new GoogleStrategy({
	clientID: keys.google.client_id,
	clientSecret: keys.google.client_secret,
	callbackURL: '/auth/google/callback', 
	proxy: true
}, (accessToken, refreshToken, profile, done) => {

	/*
	 * the accessToken is the response code we recieve from google,
	 * refreshToken is used to restore a session and profile contains
	 * the information about the user and we use this to retrieve a
	 * user from our mongoDB. If the user doesn't exist, we create one.
	 */

	//generating unique hash for the profile
	const unique_hash = new Hashes.SHA1().b64(profile.id);

	User.findOne({
		user_id: unique_hash,
		service: profile.provider
	}).then((existingUser) => {
		if (existingUser) {
			done(null, existingUser);
		} else {
			new User({
				user_id: profile.id,
				name: profile.displayName,
				service: profile.provider
			}).save().then(user => {
				done(null, user);
			})
		}
	})
}));


// Facebook Strategy
passport.use(new FacebookStrategy({
	clientID: keys.facebook.client_id,
	clientSecret: keys.facebook.client_secret,
	callbackURL: '/auth/facebook/callback',
	profileFields: ['id', 'displayName', 'photos', 'email'],
	proxy: true
}, (accessToken, refreshToken, profile, cb) => {

	/*
	 * the accessToken is the response code we recieve from facebook,
	 * refreshToken is used to restore a session and profile contains
	 * the information about the user and we use this to retrieve a
	 * user from our mongoDB. If the user doesn't exist, we create one.
	 */

	//generating a unique hash for the profile
	const unique_hash = new Hashes.SHA1().b64(profile.id);

	User.findOne({
		user_id: unique_hash,
		service: profile.provider
	}).then((existingUser) => {
		if (existingUser) {
			cb(null, existingUser)
		} else {
			new User({
				user_id: profile.id,
				name: profile.displayName,
				service: profile.provider
			}).save().then(user => {
				cb(null, user);
			})
		}
	})
}));