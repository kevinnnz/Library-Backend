const admin = require('firebase-admin')
require('dotenv')

const firebaseConfig = {
    apiKey: process.env.FIREBASEAPI,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
}

admin.initializeApp(firebaseConfig)

module.exports = admin