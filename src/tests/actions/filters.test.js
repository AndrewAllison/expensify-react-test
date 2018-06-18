import {setEndDate, setStartDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should set start date action objet', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_STARTDATE',
    startDate: moment(0)
  });
});

test('should set end date action objet', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_ENDDATE',
    endDate: moment(0)
  })
});

test('should set setTextFilter action object', () => {
  const action = setTextFilter('SOME_TEXT');
  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    text: 'SOME_TEXT'
  });
});

test('should set setTextFilter as null if no value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    text: ''
  });
});

test('should set sortby amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SET_SORTBY_AMOUNT'
  });
});

test('should set sortby date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SET_SORTBY_DATE'
  });
});