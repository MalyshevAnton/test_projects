import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import InputForm from './InputForm';
const url = 'http://178.128.196.163:3000/api/records';


class OneRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditingNow: false,
            name: this.props.row['data']['name'],
            age: this.props.row['data']['age']
        }
    }

    updateName = (value) => {
        this.setState({ name: value });
    }
    updateAge = (value) => {
        this.setState({ age: value });
    }

    editRow() {
        this.setState({ isEditingNow: true });
    }

    async saveInput() {

        const _id = this.props.row['_id'];
        const data = {
            data: {
                name: this.state.name,
                age: this.state.age
            }
        }

        const response = await fetch(url + '/' + _id, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            this.setState({ isEditingNow: false });
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }

    render() {

        let myElements = [];
        const oneRowData = this.props.row['data'];

        myElements.push(<td key={'name'}>
            <InputForm
                updateData={this.updateName}
                value={oneRowData['name']}
                isEditable={this.state.isEditingNow}
            />
        </td>);

        myElements.push(<td key={'age'}>
            <InputForm
                updateData={this.updateAge}
                value={oneRowData['age']}
                isEditable={this.state.isEditingNow}
            />
        </td>);

        myElements.push(<td key={'editButton'}>
            <EditButton
                isClicked={this.state.isEditingNow}
                handleClickEdit={this.editRow.bind(this)}
                handleClickSave={this.saveInput.bind(this)} />
        </td>);

        myElements.push(<td key={'deleteButton'}>
            <DeleteButton
                handleClick={this.props.delFunc}
            />
        </td>);

        return (
            <tr children={myElements}></tr>
        );
    }
}

export default OneRow;