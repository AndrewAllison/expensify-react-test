import React from 'react';
import { Link } from "react-router-dom";

import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
numeral.locale('en-gb');

const ExpenseListItem = ({ amount, createdAt, description, dispatch, id }) => (
  <div className="expense__list-item">
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>
      {numeral(amount / 100).format('$0,0.00')}
      -
      {moment(createdAt).format('MMMM Do, YYYY')}</p>

  </div>
);

export default ExpenseListItem;

