import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      id: '',
    };
    this.formId = uuidv4();
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleAddContact = e => {
    e.preventDefault();
    this.props.onAddSubmit({ ...this.state, ...{ id: uuidv4() } });
    this.resetState();
  };

  resetState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleAddContact}
          htmlFor={this.formId}
          className={styles.contact_form}
        >
          <label>
            <h2 className={styles.title}>Name</h2>
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
            <h2 className={styles.title}>Number</h2>
            <input
              type="text"
              placeholder="Enter number"
              value={number}
              onChange={this.handleChange}
              id={this.formId}
              name="number"
            ></input>
          </label>
          <Button type="submit" text="Add contact" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
