import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SET_SORTBY_AMOUNT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to date', () => {
  const defaultState = {
    text:'',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const action = {type: 'SET_SORTBY_DATE'};
  const state = filtersReducer(defaultState, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set text filter', () => {
  const text = 'test';
  const state = filtersReducer(undefined, {type: 'SET_FILTER_TEXT', text: text});
  expect(state).toEqual({
    text: text,
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set startDate', () => {
  const startDate = moment().add(2, 'days');
  const state = filtersReducer(undefined, {type: 'SET_STARTDATE', startDate});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate,
    endDate: moment().endOf('month')
  });
});

test('should set endDate', () => {
  const endDate = moment().add(2, 'days');
  const state = filtersReducer(undefined, {type: 'SET_ENDDATE', endDate});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: endDate
  });
});