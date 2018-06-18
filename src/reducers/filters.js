import moment from 'moment';

// Filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        text: action.text
      };
    case 'SET_SORTBY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_SORTBY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_STARTDATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_ENDDATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};