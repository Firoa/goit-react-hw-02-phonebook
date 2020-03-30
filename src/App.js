import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super()
    this.state = {
      contacts: [],
      name: ''
    }
  }

  handleAddContact = (e) => {
return 0;
  }
  render() {
    return (<div className="App">
      <h2>Name</h2>
      <input type='text'  ></input>
      <button type='button' onSubmit>Add contact</button>
    </div>)
  }
}

export default App;
