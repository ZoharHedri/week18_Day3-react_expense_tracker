

import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class SingleInput extends Component {
    render() {
        return (
            <div>
                <label className="singleLabel">{this.props.title}</label>
                <input className="singleInput" type={this.props.inputType} placeholder={this.props.placeholder}
                    id={this.props.id} value={this.props.content} onChange={this.props.controlFunc} />
            </div>
            //value = props.content ==> get the value (passed by props) back from the state
            //onChange = this.props.controlFunc ==> activate function (passed by props) on change event
        )
    }

}

// singleInput.PropTypes = {
//     id: PropTypes.string
// };

export default SingleInput;
