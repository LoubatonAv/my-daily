import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import { taskReducer } from './task.reducer.js';
import { expenseReducer } from './expense.reducer';
// import { userReducer } from './user.reducer.js';

const rootReducer = combineReducers({
  taskModule: taskReducer,
  //   userModule: userReducer,
  expenseModule: expenseReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
