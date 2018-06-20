import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import { startSetExpenses } from './actions/expenses';
import showVisible from './selectors/expenses';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

import './firebase/firebase';

const store = configureStore();
const state = store.getState();
showVisible(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('App'));
// Load up
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('App'));
});
