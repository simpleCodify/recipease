var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Chef = require('../models/chef');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
    function(accessToken, refreshToken, profile, cb) {
        Chef.findOne({ 'googleID': profile.id }, function(err, chef) {
            if (err) return cb(err);
            if (chef) {
                return cb(null, chef);
            } else {
                // This is a new chef!
                var newChef = new Chef({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleID: profile.id
                });
                newChef.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newChef);
                });
            }
        });
    }
));

passport.serializeUser(function(chef, done) {
    done(null, chef.id);
});

passport.deserializeUser(function(id, done) {
    Chef.findById(id, function(err, chef) {
        done(err, chef);
    });
});