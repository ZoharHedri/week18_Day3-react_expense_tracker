
/*expense project architecture:
1) a component to representan 'input' element on the 'form'
2) a component to hold a 'form' with a submit button
3) some kind of a 'state' to store our expense
4) a component to display our list of expenses
5) a component to display a single expense
*/
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseDisplay from './ExpenseDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [] }
    this.addExpense = this.addExpense.bind(this);
  }

  addExpense(expense) {
    //use 'concat' to create a new array made up of the current 'expenses' array, plus the new object to be added
    this.setState({ expenses: this.state.expenses.concat(expense) });
    // alert(this.state.expenses);
    console.log(`add expense: ${this.state.expenses}`);
  }

  removeExpense(expense) {

  }


  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <ExpenseForm addExpense={this.addExpense} />
        <ExpenseDisplay expenses={this.state.expenses} />
      </div>
    );
  }
}

export default App;
