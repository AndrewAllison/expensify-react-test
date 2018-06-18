import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';

import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[ 0 ]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with data', () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'New Description';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
  const value = 'aaa250';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmiit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[ 0 ]} addExpense={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {
    }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenCalledWith({
                                             description: expenses[ 0 ].description,
                                             amount: expenses[ 0 ].amount,
                                             createdAt: expenses[ 0 ].createdAt,
                                             note: expenses[ 0 ].note
                                           });
});
test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calenderFocused on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calenderFocused')).toEqual(focused);
});
