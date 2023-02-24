const initialState = {
  tasks: [],
  filterBy: null,
};

export function taskReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_TASKS':
      newState = { ...state, tasks: action.tasks };
      break;
    case 'REMOVE_TASK':
      newState = { ...state, tasks: state.tasks.filter((task) => task.id !== action.personId) };
      break;
    case 'SET_FILTER':
      newState = { ...state, filterBy: action.filterBy };
      break;

    default:
      return newState;
  }
  return newState;
}
