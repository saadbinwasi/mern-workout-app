import React, { useState } from 'react'

function WorkoutForm() {
const [title,setTitle] = useState('')
const [reps,setReps] = useState('')
const [load,setLoad] = useState('')
  return (
    <div className='workout-form'>
         <div className="content">

      <form>
        <h3>Add a Workout</h3>
        <label>Exercise Title:</label>
        <input type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />
        <label>Reps:</label>
        <input type='text'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        />
        <label>Weight:</label>
        <input type='number'
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
