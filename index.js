// importing modules 
const express = require("express");
const colour = require("colour");
const passport = require("passport");
const session = require('express-session');
const MongoStore = require('connect-mongo');

const db = require('./db.js');
const config = require("./config")
const auth1 = require("./routes/auth.js");
const home21 = require("./routes/home.js");

const app = express();
const sessionStore = new MongoStore({ mongoUrl: config.databaseUri });


// Session Handling
app.use(session({
  secret: 'walnutthehacker',
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}));


// Session and Initialize
app.use(passport.initialize());
app.use(passport.session());

// Router
app.use("/home", home21);
app.use("/auth", auth1);

// Discord Strategy
require("./strategy/discord");



// Port
const port = config.port;

app.get("/", (req, res) => {
  res.redirect('/auth/discord')
});






// Listen
app.listen(port, () => {
  console.log(`Listening on port: ${port}`.green);
});
