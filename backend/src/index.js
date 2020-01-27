/* eslint-disable no-console */
require('dotenv').config({ path: 'variables.env' });
const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const cookieParser = require('cookie-parser');
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());
// TODO use express middleware to populate current user

// passport.use(new TwitterStrategy({
//   consumerKey: TWITTER_CONSUMER_KEY,
//   consumerSecret: TWITTER_CONSUMER_SECRET,
//   callbackURL: "http://www.example.com/auth/twitter/callback"
// },
// function(token, tokenSecret, profile, done) {
//   User.findOrCreate(..., function(err, user) {
//     if (err) { return done(err); }
//     done(null, user);
//   });
// }
// ));

server.express.get('/auth/twitter', (req, res, next) => {
  res.send('hello there');
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  details => {
    console.log(`Server is now running on port http://localhost:${details.port}`);
  }
);
