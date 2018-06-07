const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
require('./models/User');
require('./services/passport');

/*
 * Starting the express app
 */
const app = express();

/*
 * The require calls a function and app is passed in
 * as an argument. 
 */
require('./routes/authRoutes')(app)


/*
 * Setting up mongoDB.
 */

 mongoose.connect(keys.mongodb.uri).then(res => {
 	console.log(res);
 }).catch(err => {
 	console.log(err);
 });

/*
 * Configuring the listening port.
 */
const port = process.env.PORT || 5000;
app.listen(port)


