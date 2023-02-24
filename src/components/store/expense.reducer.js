const initialState = {
  expenses: [],
  incomes: [],
  filterBy: null,
};

export function expenseReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_EXPENSES':
      newState = { ...state, expenses: action.expenses };
      break;
    case 'REMOVE_EXPENSE':
      newState = { ...state, expenses: state.expenses.filter((expense) => expense.id !== action.personId) };
      break;
    case 'SET_FILTER':
      newState = { ...state, filterBy: action.filterBy };
      break;

    //Incomes
    case 'SET_INCOMES':
      newState = { ...state, incomes: action.incomes };
      break;
    case 'REMOVE_INCOME':
      newState = { ...state, incomes: state.incomes.filter((income) => income.id !== action.personId) };
      break;
    case 'SET_FILTER':
      newState = { ...state, filterBy: action.filterBy };
      break;

    default:
      return newState;
  }
  return newState;
}
