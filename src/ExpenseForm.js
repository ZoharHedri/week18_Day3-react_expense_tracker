

import React, { Component } from 'react';
import SingleInput from './SingleInput';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = { amt: 0, cat: "", descr: "" };
        //bind both functions so we can get the correct "this"
        this.changeExpense = this.changeExpense.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
        console.log(this.state);
    }

    //function to listen to any change in the input.
    changeExpense(e) {
        this.setState({ [e.target.id]: e.target.value });
        //e.target.id ==>  the element id (which matches our state)
        //e.target.value ==> the element value
        //[e.target.id] ==>is the way to define a dynamic var name
        console.log(e.target.value);
    }

    onBtnClick() {
        this.props.addExpense(this.state);
        // this.setState({ amt: 0, cat: '', descr: '' }, () => {
        //     console.log(this.state); //maybe dont need the arrow func
        // });
        //this.setState({ amt: 0, cat: '', descr: '' });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form>
                    {/*content={this.state.amt} */}
                    <SingleInput title="cost " id="amt" type="number" placeholder="$" controlFunc={this.changeExpense} />
                    {/*content={this.state.cat} controlFunc={this.changeExpense}*/}
                    <SingleInput title="category " id="cat" type="text" placeholder="category" controlFunc={this.changeExpense} />
                    {/*content={this.state.descr} controlFunc={this.changeExpense}*/}
                    <SingleInput title="desciption " id="descr" type="text" placeholder="desciption" controlFunc={this.changeExpense} />
                    <button type="button" onClick={this.onBtnClick}>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;

/*EXTENSIONS
1. Make individual expenses removable - onclick func to remove
2. Make individual expenses editable - onclick func to edit
3. Organize expenses by highest or lowest amount onClick of a button
4. Use bootstrap and make it look pretty!
5. Make a component for filtering expenses by category ( warning difficult )
*/