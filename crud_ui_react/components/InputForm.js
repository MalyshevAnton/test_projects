import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value, };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.updateData(event.target.value);
    }

    render() {

        if (this.props.isEditable) {
            return (
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            );
        } else {
            return (
                <input type="text" readOnly value={this.state.value} onChange={this.handleChange} />
            );
        }
    }
}

export default InputForm;