

import React, { Component } from 'react'

class expense extends Component {
    render() {
        return (
            // don't nees the $ sign
            <div>{this.props.amt},{this.props.cat},{this.props.descr}</div>
        );
    }
}

export default expense;