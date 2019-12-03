![Library Logo](/images/library.png)

# Welcome to Library!
👋 This is the repo for Library, a content management server for CS grads to show off their latest projects.

## Dependencices 
You will need to create a Firebase project to handle the authentication. Once you have a firebase config file make a folder called auth and in it make a file called 'firebase-admin.js'. Firebase-admin should look like this: 

```javascript
const admin = require('firebase-admin')

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASEURL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
}

admin.initializeApp(firebaseConfig)

module.exports = admin
```

Library also needs Node.js to run. [Click here to install latest Node.js](https://nodejs.org/en/).

Library is currently using MongoDB for a database. [Click here to set up a MongoDb](https://www.mongodb.com/cloud/atlas) or install it on the server you're using. Once you have a mongodb instance ready to use make a database called 'Library' with a collections: 'projects'. 

You're going to need to do this by hand at the moment. We're currently building a script to automate the process. You can insert sample data using the mongo.js file.

The GUI for the admin panel is currently not public yet.

## Installation
Open root directory of the Library server and run:
```
npm install
npm run dev
```

Once finished your project will be set up and ready for you to build a front-end application for.