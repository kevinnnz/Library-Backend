const express = require('express') 
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const dotenv = require('dotenv').config();

const MongoClient = require('mongodb').MongoClient


const books = require('./routes/books')
const projects = require('./routes/projects')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

const port = process.env.PORT
const dbUrl = process.env.DB 
global.db = ""

// Routes
app.use('/lib/api/books', books)
app.use('/lib/api/projects', projects)

app.use(function(res, req, next) { 
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// Initialize connection once
MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, database) {
    // NOTE: implement an email service to email me if it goes down..
    if(err) console.log(err);
    db = database.db('library')

    // Start the application after the database connection is ready
    app.listen(port, function() {
        console.log("Listening on " + port)
    })
})




