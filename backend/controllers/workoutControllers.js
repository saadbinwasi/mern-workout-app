const Workout = require('../model/workout')

//get all workout
const getWorkouts = async (req,res) => {
const workouts = await Workout.find({}).sort({createdAt: -1})

res.status(200).json(workouts)
 }

//create a new work out
const createWorkout = async (req,res) =>   {
    const { title, load, reps } = req.body

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//get a single workout

const getWorkout = async (req,res) => {

    const {id} = req.params
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'no such workout'})
    }

    res.status(200).json(workout)

}








module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout
}