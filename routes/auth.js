const express = require('express');
const session = require('express-session');
const router = express.Router();
const MongoStore = require('connect-mongo');
const passport = require('passport');
const config = require('./../config')

// This directory will trigger Discord Strategy 
router.get('/discord', passport.authenticate('discord'));

// Callback Directory 
router.get('/discord/callback', passport.authenticate('discord', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/home');
// On success redirect to /home directory
});

router.get('/discord/logout', (req, res) => {
    req.session.destroy();

    res.redirect('/')

});


module.exports = router;
