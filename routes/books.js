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
    db.collection('books').find().toArray(function(err, result) {
        console.log(result)
        if(err) {
            res.status(200).json({
                'code' : 424,
                'message' : 'Database error'
            }) 
        } else {
            res.status(200).json(result)
        }
    })
})

// POST api/books
router.post('/', decodeFireBaseToken, isAuthenticated, function(req, res){
    return 'Not implemented yet'
})

module.exports = router

