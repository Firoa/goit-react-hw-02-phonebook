import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button'
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      id: ''
    };
    this.formId = uuidv4();
  }

  handleChange = e => {
    const {value,name} = e.target;
    this.setState({ [name]: value });
  };

  handleAddContact = e => {
    e.preventDefault();     
    this.props.onAddSubmit ([{...this.state,...{id: uuidv4()}}]);
    this.resetState();
  };

  resetState = () =>{
    this.setState({
      name: '',
      phoneNumber: ''
    })
  }

  render() {
    const { name, phoneNumber } = this.state;
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
              name="name"
            ></input>
          </label>
          <label>
          <h2>Number</h2>
            <input
              type="text"
              placeholder="Enter friend"
              value={phoneNumber}
              onChange={this.handleChange}
              id={this.formId}
              name="phoneNumber"
            ></input>
          </label>
                   <Button type="submit" text="Add contact"/>
        </form>
      </div>
    );
  }
}

export default ContactForm;
