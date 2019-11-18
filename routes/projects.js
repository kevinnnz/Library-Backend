const express = require('express')
const router = express.Router()

const { isAuthenticated, decodeFireBaseToken } = require('../middleware/validator')

// middleware
router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now())
    next()
})

// GET: api/projects
router.get('/', function(req, res){
        db.collection('projects').find().toArray(function(err, result) {
            if(err) {
                res.status(424).json({
                    'code' : 424,
                    'message' : 'Database error'
                }) 
            } else {
                res.status(200).json(result)
            }
        })
})

// POST: api/projects
router.post('/', decodeFireBaseToken, isAuthenticated, function(req, res) {
    db.collection('projects').insertOne(req.body, function(err, result){
        if(err) {
            res.sendStatus(500).json({
                'code' : 500,
                'message' : err
            })
        } else res.sendStatus(200)

        client.close()
    }) 
})

// POST: api/projects
router.post('/edit', decodeFireBaseToken, isAuthenticated, function(req, res) {
    res.send(200).json('Hello!')
})


module.exports = router
