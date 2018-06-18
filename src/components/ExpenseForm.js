import React from 'react';

import moment from 'moment';

import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      calenderFocused: false,
      error: ''
    };
  }


  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChanged = ({ focused }) => {
    console.log('CHnage', focused);
    this.setState(() => ({ calenderFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description && !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.addExpense({
                            amount: parseFloat(this.state.amount, 10) * 100,
                            description: this.state.description,
                            createdAt: this.state.createdAt.valueOf(),
                            note: this.state.note
                          });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            autoFocus
            onChange={this.onDescriptionChange}
            placeholder="Description"
            type="text"
            value={this.state.description}
          />
          <input
            onChange={this.onAmountChange}
            placeholder="Amount"
            type="text"
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            focused={this.state.calenderFocused}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChanged}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="Do MMM YYYY"
          />
          <textarea
            onChange={this.onNoteChange}
            placeholder="Enter a note for your expense"
            value={this.state.note}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
