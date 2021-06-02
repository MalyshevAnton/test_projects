import React, { Component } from 'react';

class AddButton extends Component {

    render() {
        return (
            <button className='add' onClick={this.props.handleClick}>
                Добавить
            </button>);
    }
}

export default AddButton;