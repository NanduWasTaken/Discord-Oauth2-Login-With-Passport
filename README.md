# Discord-Oauth2-Login-With-Passport
Discord Oauth2 Login With Passport.js and Mongoose ( MongoDB ) 

# Intro
This is a Discord oauth2 login template. Using Passport-Discord to Login. Mongoose - MongoDb database to store user session and data like email, avatar, username etc.

# Steps
In config.json
```JS
{

  "clientId": "[Your_Client_ID]",        
  
  "callbackUrl": "https://[yourwebsite]/auth/discord/callback",

  "port": "3000",

  "databaseUri": "[Your_MongoDB_Database_URI]"

}
```
 *Step 1* - Replace "[Your_Client_ID]" with you discord application client ID 
 
 *Step 2* - Replace "[yourwebsite]" with your web address ( in vscode localhost:3000 )
 
 *Step 3* - Replace "[Your_MongoDB_Database_URI]" with your MongoDB Database Uri.
 
 *Step 4* - Then you are all set to go type node index.js in your console!
 
 *Step 5* - Go to the your / directory it will redirect you to the discord authorisation page. Authorise the application and see the magic!
 
 if you encounter any error feel free to create a issue here!
