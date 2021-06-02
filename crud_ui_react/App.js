import React, { Component } from 'react';
import './App.css';
import MyTable from './components/MyTable';
import AddButton from './components/AddButton'
const url = 'http://178.128.196.163:3000/api/records';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {

    fetch(url)
      .then(response => response.json())
      .then(newData => this.setState({ data: newData }))

  }

  async addNewRow() {

    let newRecordData = {}

    newRecordData = { 'name': 'Введите имя', 'age': 'Введите возраст' }
    const data = JSON.stringify({ data: newRecordData });

    const response = await fetch(url, {
      method: 'PUT',
      body: data,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const newRecord = await response.json();
      const newData = [...this.state.data, newRecord];
      this.setState({ data: newData });
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  async deleteRow(_id) {

    const response = await fetch(url + '/' + _id, {
      method: 'DELETE',
    });

    if (response.ok) {
      let newData = [];
      for (let i = 0; i < this.state.data.length; i++) {
        if (_id !== this.state.data[i]['_id']) {
          newData.push(this.state.data[i]);
        }
      }
      this.setState({ data: newData });
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  render() {
    return (
      <div>
        <MyTable deleteFunc={this.deleteRow.bind(this)} data={this.state.data} />
        <AddButton handleClick={this.addNewRow.bind(this)} />
      </div>)
  }

}

export default App;
