import { taskService } from '../../services/task.service';

export function loadTasks(filterBy) {
  return (dispatch, getState) => {
    taskService.query(filterBy).then((task) => {
      const action = { type: 'SET_TASKS', tasks: task };
      dispatch(action);
    });
  };
}

export function addTask(task) {
  return async (dispatch) => {
    try {
      const savedTask = await taskService.addTask(task);
      //   console.log('savedTask:', savedTask);

      const action = {
        type: 'ADD_TASK',
        todo: savedTask,
      };
      dispatch(action);
    } catch (err) {
      //   console.log('Can not add task', task);
    }
  };
}

export function removeTask(taskId) {
  console.log('taskId:', taskId);

  return (dispatch) => {
    taskService.remove(taskId).then(() => {
      const action = { type: 'REMOVE_TASK', personId: taskId };
      dispatch(action);
    });
  };
}
