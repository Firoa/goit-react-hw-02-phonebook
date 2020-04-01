import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: '',
    };
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
    return (
      <div className="App">
        <form onSubmit={this.handleAddContact}>
          <label>
            <h2>Name</h2>
            <input
              type="text"
              placeholder="Enter friend"
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default App;
