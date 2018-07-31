

import React, { Component } from 'react'
import Expense from './Expense';

class ExpenseDisplay extends Component {

    renderExpenses() {
        //return <li>soon we will have some data</li>
        return this.props.expenses.map(
            //(expense,index) => <li key={index}>{JSON.stringify(expense)}</li>
            (expense, index) => <Expense key={index} {...expense} />
        );
    }


    render() {
        return (
            <ul>
                {this.renderExpenses()}
            </ul>
        )
    }
}

export default ExpenseDisplay;