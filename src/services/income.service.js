import { storageService } from './storage.service.js';

const STORAGE_KEY = 'incomeDB';
const BASE_URL = 'tab';

export const incomeService = {
  query,
  addIncome,
  remove,
};

async function query({ genre, text } = {}) {
  let incomes = _loadIncomesFromStorage();

  if (!incomes || incomes.length < 1) {
    let incomes = [];
    return incomes;
  }

  try {
    let list = incomes;
    if (genre) {
      list = list.filter((m) => m.genre === genre);
    }
    if (text) {
      const filterRegex = new RegExp(text, 'i');
      list = list.filter((m) => filterRegex.test(m.name));
    }
    return list;
  } catch (err) {
    console.log('cant get melodies from local storage', err);
    throw err;
  }
}

async function addIncome(income) {
  let incomes = _loadIncomesFromStorage();
  if (incomes.length < 1) incomes = [];
  const updatedIncomes = [...incomes, income];
  console.log('updatedIncomes:', updatedIncomes);
  _saveIncomesToStorage(updatedIncomes);
  return updatedIncomes;
}

function remove(incomeId) {
  return storageService.removeFromStorage(STORAGE_KEY, incomeId);
}

function _saveIncomesToStorage(incomeData) {
  storageService.saveToStorage(STORAGE_KEY, incomeData);
}

function _loadIncomesFromStorage() {
  return storageService.loadFromStorage(STORAGE_KEY);
}
