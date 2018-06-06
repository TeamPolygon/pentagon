const express = require('express');
require('./services/passport.js');
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
 * Configuring the listening port.
 */
const port = process.env.PORT || 5000;
app.listen(port)


