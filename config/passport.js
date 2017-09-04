// Utilizes a Passport Strategy for authenticating with a JSON Web Token
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// Pull information from the database and user model
const User = require('../models/user');
const config = require('../config/database');

// Modeled after: https://www.npmjs.com/package/passport-jwt
module.exports = function(passport){
  let opts = {};
  // Create a new extractor that looks for the JWT in the authorization header with the scheme 'JWT'
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); 
  // REQUIRED string containing the secret key for verifying the token's signature
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  	// Gets object literal containing the decoded JWT payload and checks to see if it matches the user
    User.getUserById(jwt_payload._doc._id, (err, user) => {
      if(err){
        return done(err, false);
      }
      if(user){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}
