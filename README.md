# Discord-Oauth2-Login-With-Passport
Discord Oauth2 Login With Passport.js and Mongoose ( MongoDB ) 

# Intro
This is a Discord oauth2 login template. Using Passport-Discord to Login. Mongoose - MongoDb database to store user session and data like email, avatar, usernetc.ame 

```JS
{

	"clientId": "[Your_Client_ID]",        
  
  "callbackUrl": "https://[yourwebsite]/auth/discord/callback",

  "port": "3000",

  "databaseUri": "[Your_MongoDB_Database_URI]"

}
```
 Replace "[Your_Client_ID]" with you discord application client ID 
 Replace "[yourwebsite]" with your web address ( in vscode localhost:3000 )
 Replace "[Your_MongoDB_Database_URI]" with your MongoDB Database Uri.
 
 Then you are all set to go type node index.js in your console!
 
 if you encounter any error feel free to create a issue here!
