import React from 'react';
import {Link} from "react-router-dom";

const ExpenseListItem = ({amount, createdAt, description, dispatch, id}) => (
  <div className="expense__list-item">
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p>£{amount} - {createdAt}</p>

  </div>
);
export default ExpenseListItem;

