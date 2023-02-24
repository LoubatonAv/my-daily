import { expenseService } from '../../services/expense.service';
import { incomeService } from '../../services/income.service';

//expenses
export function loadExpenses(filterBy) {
  return (dispatch, getState) => {
    expenseService.query(filterBy).then((expense) => {
      const action = { type: 'SET_EXPENSES', expenses: expense };
      dispatch(action);
    });
  };
}

export function addExpense(expense) {
  return async (dispatch) => {
    try {
      const savedExpense = await expenseService.addExpense(expense);

      const action = {
        type: 'ADD_EXPENSE',
        todo: savedExpense,
      };
      dispatch(action);
    } catch (err) {}
  };
}

export function removeExpense(expenseId) {
  return (dispatch) => {
    expenseService.remove(expenseId).then(() => {
      const action = { type: 'REMOVE_EXPENSE', personId: expenseId };
      dispatch(action);
    });
  };
}

//INCOMES

export function loadIncomes(filterBy) {
  return (dispatch, getState) => {
    incomeService.query(filterBy).then((income) => {
      const action = { type: 'SET_INCOMES', icomes: income };
      dispatch(action);
    });
  };
}

export function addIncome(income) {
  return async (dispatch) => {
    try {
      const savedIncome = await incomeService.addIncome(income);

      const action = {
        type: 'ADD_INCOME',
        todo: savedIncome,
      };
      dispatch(action);
    } catch (err) {}
  };
}

export function removeIncome(incomeId) {
  console.log('incomeId:', incomeId);

  return (dispatch) => {
    incomeService.remove(incomeId).then(() => {
      const action = { type: 'REMOVE_INCOME', incomeId: incomeId };
      dispatch(action);
    });
  };
}
