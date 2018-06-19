import getExpensesTotal from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', ()=>{
  const result = getExpensesTotal([]);
  expect(result).toEqual(0);
});

test('should return amount if single expenses', ()=>{
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toEqual(195);
});

test('should return amount if multiple expenses', ()=>{
  const result = getExpensesTotal(expenses);
  expect(result).toEqual(114195);
});

test('should return 0 if array with no expenses', ()=>{
  const result = getExpensesTotal([]);
  expect(result).toEqual(0);
});
