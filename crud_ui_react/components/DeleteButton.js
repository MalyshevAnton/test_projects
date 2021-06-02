import React, { Component } from 'react';

class DeleteButton extends Component {

    render() {
        return (
            <button className='del' onClick={this.props.handleClick}>
                Удалить строку
            </button>);
    }
}

export default DeleteButton;