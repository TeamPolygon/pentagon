const passport = require('passport');


/*
 * This module exports all routes of Polygon.
 */

module.exports = app => {
	// Google oAuth end-point
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));

	//Google oAuth callback end-point
	app.get('/auth/google/callback', passport.authenticate('google'));
}