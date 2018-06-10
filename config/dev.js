/*
 * This file contains dev credentials for various services used
 * by Pentagon.
 */

module.exports = {
    google: {
          client_id: "197968514673-cp0fugkciaobt1sgp201qve7fl152fq1.apps.googleusercontent.com",
          project_id: "polygon-206423",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://accounts.google.com/o/oauth2/token",
          auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
          client_secret: "BO14hviFX1NJc1mkeeYZj_pq"
    },

    facebook: {
          client_id: "230850987504172",
          client_secret: "110ae117403a8c758f4f85de4c6e5499"
    },

    mongodb: {
          username: "pentagonadmin",
          password: "pentagonadmin123",
          uri: "mongodb://pentagonadmin:pentagonadmin123@ds137740.mlab.com:37740/polygon"
    },

    cookies: {
          key: "mL+NZM+t!2ArdxF2+kWm$KB#5-wx3r?=5s"
    }
}