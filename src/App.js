import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
    };
    this.formId = uuidv4();
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleAddContact = e => {
    e.preventDefault();
    // contacts: this.state.contacts.push({ id: uuidv4(), name: 'Kastorka' }),
    this.setState(prevState => {
      return console.log(prevState);
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleAddContact} htmlFor={this.formId}>
          <label>
            <h2>Name</h2>
            <input
              type="text"
              placeholder="Enter friend"
              value={name}
              onChange={this.handleChange}
              id={this.formId}
            ></input>
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default App;
