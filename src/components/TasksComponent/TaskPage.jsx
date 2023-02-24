import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, loadTasks } from '../store/task.action';
import Tasks from './Tasks';
import { v4 as uuidv4 } from 'uuid';

const TaskPage = () => {
  //constants
  const categories = ['cleaning', 'bills', 'else'];
  const tasks = useSelector((state) => state?.taskModule?.tasks);

  //hooks
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    name: '',
    category: 'none',
    user: null,
  });

  const onAddTask = () => {
    if (!task.name) return;
    const newTask = { ...task, id: uuidv4() };
    dispatch(addTask(newTask));
    setTask({ name: '', category: 'none', user: null });
  };

  useEffect(() => {
    dispatch(loadTasks());
  }, [task]);

  return (
    <div className='text-sm'>
      <div>
        <input
          required
          className='w-full block appearance-none border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Choose name..'
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <select
          required
          className=' w-full bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={task.category}
          onChange={(e) => setTask({ ...task, category: e.target.value })}>
          <option value={'none'}>No category selected</option>
          {categories.map((category) => (
            <option value={category.toLowerCase()}>{category}</option>
          ))}
        </select>
        <button onClick={onAddTask}>Submit</button>
      </div>
      <div>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskPage;
