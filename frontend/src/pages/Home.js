import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkout';

function Home() {
const {workouts, dispatch} = useWorkoutsContext()
    useEffect(() => {
  const fetchWorkouts = async () => {
  const response = await fetch('/api/workouts');
  const json = await response.json()

  if(response.ok){
  dispatch({type: 'SET_WORKOUTS' , payload: json})
  }
  }

  fetchWorkouts()
    },[])

  return (
    <div className='Home'>
    <Navbar/>
 
<div className='main-container-home'>
<div className='workouts'>
<h1 className='heading-allworkout'></h1> 
    {workouts && workouts.map((workout) => (
        <div className='workout-list' key={workout.id}>
           <WorkoutDetails key={workout._id} workout={workout}/>
        </div>
    ))}
     
    </div>
    <div className='adding-workout'>
        <WorkoutForm/>
    </div>

</div>

    </div>
  )
}

export default Home
