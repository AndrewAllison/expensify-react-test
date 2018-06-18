import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import {addExpense} from './actions/expenses';
import showVisible from './selectors/expenses';

import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 4500}));


const state = store.getState();
showVisible(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('App'));
