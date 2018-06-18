const expensesReducerDefaulltState = [];
export default (state = expensesReducerDefaulltState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
      break;
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
         if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
      break;
    default:
      return state;
  }
};
