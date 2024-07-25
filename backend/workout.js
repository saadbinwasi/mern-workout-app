const express = require('express')
const Workout = require('./model/workout')

const router = express.Router()


//get all worksouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET ALL WORKOUTS'})
})

//get a single workout
router.get('/:id',  (req,res) => {
    res.json({mssg: 'GET a single workout'})
})

// post a new workout
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


//delete a workout
router.delete('/:id', (req,res) => {
    res.json({mssg: 'delete workout'})
})

//update a workout
router.patch('/:id', (req,res) => {
    res.json({mssg: 'update workout'})
})


module.exports = router;