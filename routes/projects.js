const express = require('express')
const router = express.Router()

const Project = require('../models/project')
const { isAuthenticated, decodeFireBaseToken } = require('../middleware/validator')
const ObjectId = require('mongodb').ObjectID

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
    let data = req.body
    let project = new Project("", data.projectTitle, data.projectDescription, data.links.backend, data.links.frontend, data.links.demo)
    db.collection('projects').insertOne({
        projectTitle : project.projectTitle,
        projectDescription : project.projectDescription,
        links : {
            backend : project.backend,
            frontend : project.frontend,
            demo : project.demo
        }
    }, function(err, result) {
        if(err) {
            res.status(422).json({
                message : "Could not update project. Please try again soon."
            })
        } else {
            res.status(200).json({
                message : "Success",
                result : result
            })
        }
    })
})

// POST: api/projects
router.post('/edit', decodeFireBaseToken, isAuthenticated, function(req, res) {
    let data = req.body
    let project = new Project(data._id, data.projectTitle, data.projectDescription, data.links.backend, data.links.frontend, data.links.demo)
    db.collection('projects').updateOne({ _id : ObjectId(project._id) }, { $set: { 
        projectTitle : project.projectTitle,
        projectDescription : project.projectDescription,
        links : {
            backend : project.backend,
            frontend : project.frontend,
            demo : project.demo
        }
    }}, function(err, result) {
        if(err) {
            res.status(422).json({
                message : "Could not create new project. Please try again soon."
            })
        } else {
            res.status(200).json({
                message : "Success",
                result : result
            })
        }
    })
})

// POST: Delete
router.post('/delete', decodeFireBaseToken, isAuthenticated, function(req, res) {
    let data = req.body
    db.collection('project').deleteOne({ _id : ObjectId(data._id), function(err, res) {
        if(err) {
            res.status(422).json({
                message : "Sorry, could not delete project."
            })
        } else {
            res.status(200).json({
                message : "Success"
            })
        }
    }})
})


module.exports = router
