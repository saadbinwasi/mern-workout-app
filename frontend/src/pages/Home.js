import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

function Home() {
const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
  const fetchWorkouts = async () => {
  const response = await fetch('/api/workouts');
  const json = await response.json()

  if(response.ok){
  setWorkouts(json)
  }
  }

  fetchWorkouts()
    },[])

  return (
    <div className='Home'>
    <Navbar/>
 
<div className='main-container-home'>
<div className='workouts'>
<h1 className='heading-allworkout'>All Workouts </h1> 
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
