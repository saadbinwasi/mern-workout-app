const express = require('express')
const Workout = require('./model/workout')
const {
createWorkout, getWorkouts, getWorkout 

} = require('./controllers/workoutControllers')

const router = express.Router()


//get all worksouts
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout);


//delete a workout
router.delete('/:id', (req,res) => {
    res.json({mssg: 'delete workout'})
})

//update a workout
router.patch('/:id', (req,res) => {
    res.json({mssg: 'update workout'})
})


module.exports = router;