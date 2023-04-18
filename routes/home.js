const express = require('express');
const router = express.Router()
const ejs = require('ejs');
const passport = require('passport');



router.get('/', (req, res) => {
  if(req.user){
    res.send('UserName', req.user.username, '#', req.user.discriminator)
    /* unleah your creativity here 
       You can use
      req.user.username
      req.user.discriminator
      req.user.email
      req.user.avatar
      and more!
    */
  } else {
    res.send('you are not logged in properly')
  }
});



module.exports = router