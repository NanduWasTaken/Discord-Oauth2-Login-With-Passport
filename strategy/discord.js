const passport = require('passport');
const crypto = require('crypto');
const cache = {};
const DiscordStrategy = require('passport-discord').Strategy;
const scopes = ['identify', 'email', 'guilds', 'guilds.join'];  // change this as per your requirement!
const User = require('./../models/user');
const codeVerifier = crypto.randomBytes(32).toString('base64').replace(/[^a-zA-Z0-9]/g, '').substr(0, 128);
const codeChallenge = crypto.createHash('sha256').update(codeVerifier).digest('base64').replace(/[^a-zA-Z0-9]/g, '');
const colour = require('colour')
const config = require("./../config")



passport.use(new DiscordStrategy({
    clientID: config.clientId,
    clientSecret: config.secret,
    callbackURL: config.callbackUrl,
    scope: scopes,
    pkce: true,
    state: true,
    authorizationParams: {
        code_challenge: codeChallenge,
        code_challenge_method: 'S256'
    }
},
 async function(accessToken, refreshToken, profile, cb) {
try {
    // Find or create the user in your database
    let user = await User.findOneAndUpdate(
      { discordId: profile.id },
      {
        discordId: profile.id,
        username: profile.username,
        discriminator: profile.discriminator,
        email: profile.email,
        avatar: profile.avatar,
        accessToken: accessToken,
        refreshToken: refreshToken
      },
      { upsert: true, new: true }
    );
    console.log('access'.yellow, accessToken);
    console.log('refresh'.yellow, refreshToken);
    // Pass the user object to the done() function
    return cb(null, user);
  } catch (err) {
    console.error('Error in DiscordStrategy callback:', err);
    return cb(err);
}
   
})); 

// Serializing 
passport.serializeUser((user, done) => {
  console.log('Serializing user:'.yellow, `${user.username}#${user.discriminator}`);
  console.log(user)
  done(null, user.id);
});

// Deserializing 
passport.deserializeUser((id, done) => {
  if (cache[id]) { // Check if user is already in cache
    console.log('Retrieving user from cache:'.yellow, id);
    done(null, cache[id]);
  } else { // User not in cache, deserialize from database
    console.log('Deserializing user with ID:'.yellow, id);
    User.findById(id)
      .then(user => {
        if (!user) {
          console.warn('User not found during deserialization');
          return done(null, false);
        }
        console.log('Deserializing user:'.yellow, user.id);
        cache[id] = user; // Add user to cache
        done(null, user);
      })
      .catch(err => {
        console.error('Error in deserializing user:', err);
        done(err);
      });
  }
});



