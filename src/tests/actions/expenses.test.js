import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up add expense action object.', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109666,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
});

test('should set up add expense with default values.', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
});

test('should set up remove expense action object.', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should set up edit expense action object.', () => {
  const action = editExpense('abc123', {note: '12345'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {note: '12345'}
  })
});