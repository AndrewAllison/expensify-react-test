// FILTERS
// SET FILTER TEXT
export const setTextFilter = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
});

export const sortByAmount = () => ({
  type: 'SET_SORTBY_AMOUNT'
});

export const sortByDate = () => ({
  type: 'SET_SORTBY_DATE'
});

export const setStartDate = (startDate) => ({
  type: 'SET_STARTDATE',
  startDate
});

export const setEndDate = (endDate) => ({
  type: 'SET_ENDDATE',
  endDate
});