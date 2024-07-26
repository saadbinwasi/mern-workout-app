import React from 'react'

function WorkoutDetails({workout}) {
  return (
    <div className='workout-detail'>

        <h1>Title: {workout.title}</h1>
        <h4>Reps: {workout.reps}</h4>
        <h4>Load {"(kg)"}: {workout.load}</h4>
        <p> {workout.createdAt}</p>
      
    </div>
  )
}

export default WorkoutDetails
