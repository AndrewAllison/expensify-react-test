// import {createStore, combineReducers} from 'redux';
// import uuid from "uuid";
//
//
// // ADD_EXPENSES
// const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });
//
// // REMOVE_EXPENSE
// const removeExpense = ({id} = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });
//
// // EDIT_EXPENSE
// const editExpense = (id, updates) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// });
//
// // FILTERS
// // SET FILTER TEXT
// const setTextFilter = (text = '') => ({
//   type: 'SET_FILTER_TEXT',
//   text
// });
//
// const sortByAmount = () => ({
//   type: 'SET_SORTBY_AMOUNT'
// });
//
// const setSortByDate = () => ({
//   type: 'SET_SORTBY_DATE'
// });
//
// const setStartDate = (startDate) => ({
//   type: 'SET_STARTDATE',
//   startDate
// });
//
// const setEndDate = (endDate) => ({
//   type: 'SET_ENDDATE',
//   endDate
// });
//
//
// // View Logic
// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//   return expenses.filter((expense) => {
//     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//     const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//
//     return startDateMatch && textMatch && endDateMatch;
//   }).sort((a, b) => {
//     if (sortBy === 'date') {
//       return a.createdAt < b.createdAt ? 1 : -1;
//     } else if (sortBy === 'amount') {
//       return a.amount < b.amount ? 1 : -1;
//     }
//   });
// };
//
//
// // Expenses
// const expensesReducerDefaulltState = [];
// const expensesReducer = (state = expensesReducerDefaulltState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [
//         ...state,
//         action.expense
//       ];
//       break;
//     case 'EDIT_EXPENSE':
//       return state.map((expense) => {
//         console.log('MAtched', action);
//
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates
//           }
//         } else {
//           return expense;
//         }
//       });
//     case 'REMOVE_EXPENSE':
//       return state.filter(({id}) => id !== action.id);
//       break;
//     default:
//       return state;
//   }
// };
//
// // Filters
// const filtersReducerDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
// };
// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_FILTER_TEXT':
//       return {
//         ...state,
//         text: action.text
//       };
//     case 'SET_SORTBY_AMOUNT':
//       return {
//         ...state,
//         sortBy: 'amount'
//       };
//     case 'SET_SORTBY_DATE':
//       return {
//         ...state,
//         sortBy: 'date'
//       };
//     case 'SET_STARTDATE':
//       return {
//         ...state,
//         startDate: action.startDate
//       };
//     case 'SET_ENDDATE':
//       return {
//         ...state,
//         endDate: action.endDate
//       };
//     default:
//       return state;
//   }
// };
// const store = createStore(combineReducers({
//   expenses: expensesReducer,
//   filters: filtersReducer
// }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//
//
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });
//
// const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
// const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));
//
// // const {id} = expenseOne.expense;
// // const {id: id2} = expenseTwo.expense;
// //
// // store.dispatch(removeExpense({id}));
//
// // store.dispatch(editExpense(id2, {amount: 500, note: 'PRICE HIKE!!!'}));
// //
// // // Filters Dispatch
// // store.dispatch(setTextFilter('rent'));
// // store.dispatch(setTextFilter());
// //
// // // Sorting
// store.dispatch(sortByAmount());
// // store.dispatch(setSortByDate());
// //
// // // SET DATE RANGE
// // store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// //
// // store.dispatch(setEndDate(10));
// // store.dispatch(setEndDate());
//
// //
// // const user = {
// //   name: 'Andrew',
// //   age: 37
// // };
// //
// // console.log({
// //   ...user,
// //   age: 21,
// //   location: 'Crook'
// // });
//
//
// // const demoState = {
// //   expenses: [{
// //     id: 'uyghjiko',
// //     description: 'Jannuary Rent',
// //     note: 'This was the final payment for that address.',
// //     amount 54500,
// //     createdAt: 0
// //   }],
// //   filters: {
// //     text: 'rent',
// //     sortBy: 'amount',
// //     startDate: undefined,
// //     endDate: undefined
// //   }
// // };