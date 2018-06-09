const passport = require('passport');
const cookie_session = require('cookie-session');
const keys = require('../config/keys.js');



/*
 * This module exports all routes of Polygon.
 */

module.exports = app => {

	//enabling cookie properties for our Express app.
	app.use(cookie_session({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookies.key] 
	}));

	//initializing the passport middleware.
	app.use(passport.initialize());

	//enabling sessions for our application.
	app.use(passport.session());
	

	// Google oAuth end-point
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));

	//Google oAuth callback end-point
	app.get('/auth/google/callback', passport.authenticate('google'));

	//Facebook oAuth end-point
	app.get('/auth/facebook', passport.authenticate('facebook'));

	//Facebook oAuth callback end-point
	app.get('/auth/facebook/callback', passport.authenticate('facebook'));

	//defining a testing end-point for user login
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	})
}