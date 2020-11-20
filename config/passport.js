const passport = require('passport');
// TODO: mount model route here

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
/*
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb) {
    MediaStreamAudioDestinationNode.findOne({ googleId: profile.id}, function(err) {
        if(err) return cb(err);
        //add other if statement once model title has been created
            return 
    })
}
}))

*/

