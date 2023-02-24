import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addIncome, addExpense, loadIncomes, loadExpenses } from '../store/expense.action';
import { v4 as uuidv4 } from 'uuid';

const ExpensePage = () => {
  const [inputExpense, setInputExpense] = useState({ name: '', price: 0 });
  const [inputIncome, setInputIncome] = useState({ name: '', price: 0 });
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state?.expenseModule?.expenses);
  const income = useSelector((state) => state?.expenseModule?.incomes);

  useEffect(() => {
    dispatch(loadExpenses());
    dispatch(loadIncomes());
  }, [inputExpense, inputIncome]);

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (!inputExpense.name || !inputExpense.price) return;
    dispatch(addExpense({ ...inputExpense, id: uuidv4() }));
    setInputExpense({ name: '', price: 0 });
  };

  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    if (!inputIncome.name || !inputIncome.price) return;
    dispatch(addIncome({ ...inputIncome, id: uuidv4() }));

    setInputIncome({ name: '', price: 0 });
  };

  const totalExpenses = expenses?.reduce((total, expense) => total + parseInt(expense.price), 0);
  const totalIncome = income?.reduce((total, income) => total + parseInt(income.price), 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className='mx-auto max-w-md'>
      <form onSubmit={handleExpenseSubmit} className='mb-6'>
        <div className='mb-4'>
          <label htmlFor='expenseName' className='block text-gray-700 font-bold mb-2'>
            Expense Name:
          </label>
          <input
            type='text'
            id='expenseName'
            value={inputExpense.name}
            onChange={(e) => setInputExpense({ ...inputExpense, name: e.target.value })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='expensePrice' className='block text-gray-700 font-bold mb-2'>
            Expense Price:
          </label>
          <input
            type='number'
            id='expensePrice'
            value={inputExpense.price}
            onChange={(e) => setInputExpense({ ...inputExpense, price: parseInt(e.target.value) })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Add Expense
        </button>
      </form>
      <form onSubmit={handleIncomeSubmit} className='mb-6'>
        <div className='mb-4'>
          <label htmlFor='incomeName' className='block text-gray-700 font-bold mb-2'>
            Income Name:
          </label>
          <input
            type='text'
            id='incomeName'
            value={inputIncome.name}
            onChange={(e) => setInputIncome({ ...inputIncome, name: e.target.value })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='incomePrice' className='block text-gray-700 font-bold mb-2'>
            Income Price:
          </label>
          <input
            type='number'
            id='incomePrice'
            value={inputIncome.price}
            onChange={(e) => setInputIncome({ ...inputIncome, price: parseInt(e.target.value) })}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Add Income
        </button>
      </form>
      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-2'>Expenses</h2>
        <ul>
          {expenses?.map((expense) => (
            <li key={expense.id} className='flex justify-between'>
              <span>{expense.name}</span>
              <span>${expense.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='mb-6'>
        <h2 className='text-xl font-bold mb-2'>Income</h2>
        <ul>
          {income?.map((income) => (
            <li key={income.id} className='flex justify-between'>
              <span>{income.name}</span>
              <span>{income.price}</span>
            </li>
          ))}
        </ul>
        <p>Total Expenses: ${totalExpenses}</p>
        <p>Total Income: ${totalIncome}</p>
        <p>Balance: ${balance}</p>
      </div>
    </div>
  );
};

export default ExpensePage;
