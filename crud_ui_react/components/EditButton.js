import React, { Component } from 'react';

class EditButton extends Component {

    render() {
        if (this.props.isClicked) {
            return (
                <button className='save' onClick={this.props.handleClickSave}>
                    Сохранить
                </button>);
        } else {
            return (
                <button className='edit' onClick={this.props.handleClickEdit}>
                    Редактировать
                </button>);
        }
    }
}

export default EditButton;