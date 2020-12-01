const passport = require('passport');
const Consumer = require('../models/consumer');


const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function (accessToken, refreshToken, profile, done) {
    Consumer.findOne({
        'googleId': profile.id
    }, function (err, foundConsumer) {
        if (err) return done(err);
        if (foundConsumer) {
            return done(null, foundConsumer)
        } else {
            const newConsumer = new Consumer({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                avatarURL: profile.avatarURL
            });
            newConsumer.save(function (err) {
                if (err) return done(err);
                return done(null, newConsumer);
            });
        }
    });
}));

passport.serializeUser(function (consumer, done) {
    done(null, consumer.id);
});

passport.deserializeUser(function (id, done) {
    Consumer.findById(id, function (err, consumer) {
        done(err, consumer);
    });
});