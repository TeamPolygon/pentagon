/*
 * This file contains prod credentials for various services used
 * by Pentagon.
 */

module.exports = {
    google: {
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET
    },

    facebook: {
          client_id: process.env.FACEBOOK_CLIENT_ID,
          client_secret: process.env.FACEBOOK_CLIENT_SECRET
    },

    mongodb: {
          uri: process.env.MONGO_URI
    },

    cookies: {
          key: process.env.COOKIE_KEY
    }
}
