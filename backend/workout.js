const express = require('express')

const router = express.Router()


//get all worksouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET ALL WORKOUTS'})
})

//get a single workout
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET a single workout'})
})

//get a new workout
router.post('/', (req,res) => {
    res.json({mssg: 'GET a new workout'})
})

//delete a workout
router.delete('/:id', (req,res) => {
    res.json({mssg: 'delete workout'})
})

//update a workout
router.patch('/:id', (req,res) => {
    res.json({mssg: 'update workout'})
})


module.exports = router;