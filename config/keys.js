/*
 * This file determines whether we are in dev or prod envs and
 * gets the required credentials.
 */

 if (process.env.NODE_ENV === 'production') {
      module.exports = require('./prod')
 } else {
      module.exports = require('./dev');
 }