const express = require('express')
const router = express.Router()

const { isAuthenticated, decodeFireBaseToken } = require('../middleware/validator')

// middleware
router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now())
    next()
})

// api/books
router.get('/', function(req, res){
        const dbo = req.app.locals.db;
        dbo.collection('books').find().toArray(function(err, result) {
            if(err) {
                res.sendStatus(424).json({
                    'code' : 424,
                    'message' : 'Database error'
                }) 
            } else {
                res.sendStatus(200).json(result)
            }

            client.close()
        })
})

// POST api/books
router.post('/', decodeFireBaseToken, isAuthenticated, function(req, res){
    return 'Not implemented yet'
})

module.exports = router

