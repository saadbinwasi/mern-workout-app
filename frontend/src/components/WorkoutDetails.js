import React from 'react';
import { useWorkoutsContext } from '../hooks/useWorkout';

function WorkoutDetails({ workout }) {
    const { dispatch } = useWorkoutsContext();

    const handleDelete = async () => {
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method: 'DELETE',
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json });
        } else {
            // Handle error appropriately
            console.error('Failed to delete workout', json);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className='workout-detail' onDoubleClick={handleDelete}>
            <h1>Title: {workout.title}</h1>
            <h4>Reps: {workout.reps}</h4>
            <h4>Load (kg): {workout.load}</h4>
            <p>Created At: {formatDate(workout.createdAt)}</p>
            <span>Double click to remove task</span>
        </div>
    );
}

export default WorkoutDetails;
