import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../store/task.action';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const onRemoveTask = (task) => {
    if (window.confirm(`Are you sure you want to delete ${task.name}?`)) {
      dispatch(removeTask(task.id));
      dispatch(loadTasks());
    }
  };

  return (
    <div className='flex'>
      <h1>{task.name}</h1>
      <button onClick={() => onRemoveTask(task)}>x</button>
    </div>
  );
};

export default Task;
