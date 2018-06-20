import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state.', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add expense.', () => {
  const expense = {description: 'New Expense', createdAt: moment().valueOf()};
  const action = {type: 'ADD_EXPENSE', expense};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id.', () => {
  const expenseToEdit = expenses[1];
  const expenseUpdates = {description: 'New Expense Description', createdAt: moment().add(14, 'days').valueOf()};
  const action = {type: 'EDIT_EXPENSE', updates: expenseUpdates, id: expenseToEdit.id};
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({
    ...expenseToEdit,
    ...expenseUpdates
  });
});

test('should not edit expense if not found.', () => {
  const expenseToEdit = expenses[1];
  const expenseUpdates = {description: 'New Expense Description', createdAt: moment().add(14, 'days').valueOf()};
  const action = {type: 'EDIT_EXPENSE', updates: expenseUpdates, id: '1222'};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should remove expense by id.', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found.', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', ()=>{
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0]]);
});