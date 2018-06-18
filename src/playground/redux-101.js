import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECEMENT',
  incrementBy: decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({count = 0} = {}) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Must be pure functions .. ONLY CHANGES to inuts not globals
// 2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

// Actions
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 2}));

store.dispatch(resetCount());
store.dispatch(setCount({
  count: 103
}));
