import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkout'

function WorkoutForm() {
const {dispatch} = useWorkoutsContext()
const [title,setTitle] = useState('')
const [reps,setReps] = useState('')
const [load,setLoad] = useState('')
const [error,setError] = useState('')




const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, load,reps}

    const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type' : 'application/json'
        }
        
    })

    const json = await response.json()

    if(!response.ok) {

        setError(json.error)

    }if(response.ok){
        setTitle('')
        setReps('')
        setLoad('')
        setError(null)
        console.log("new workout added",json)
        dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
}
  return (
    <div className='workout-form'>
         <div className="content">

      <form className='create' onSubmit={handleSubmit}>
        <h3>Add a Workout</h3>
        <label>Exercise Title</label>
        <input type='text'
         placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />
        <label>Reps</label>
        <input type='text'
        placeholder='Reps'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        />
        <label>Weight</label>
        <input type='number'
         placeholder='Weight'
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        />

        <button>Add Your Workout</button>
        
      </form>
      </div>
    </div>
  )
}

export default WorkoutForm
