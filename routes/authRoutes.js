const passport = require('passport');


/*
 * This module exports all routes of Polygon.
 */

module.exports = app => {
	// Google oAuth end-point
	app.get('/auth/google', passport.authenticate('google', 
		{scope: ['profile', 'email']}));

	//Google oAuth callback end-point
	app.get('/auth/google/callback', passport.authenticate('google'));

	//Facebook oAuth end-point
	app.get('/auth/facebook', passport.authenticate('facebook'));

	//Facebook oAuth callback end-point
	app.get('/auth/facebook/callback', passport.authenticate('facebook'));
}