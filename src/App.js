import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';
import Filter from './components/Filter/Filter';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
    this.formId = uuidv4();
  }

  handleAddContact = data => {
    const flag = this.state.contacts.find(({ name }) => name === data.name);
    if (flag !== undefined) {
      alert(`${flag.name} is allready in contacts`);
      return 0;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };

  handleDeleteContact = key => {
    const newState = this.state.contacts.filter(({ id }) => id !== key);
    this.setState({ contacts: newState });
  };

  handleFilter = data => {
    this.setState({ filter: data });
  };

  render() {
    return (
      <div className={styles.app}>
        <h2 className={styles.title}>PhoneBook</h2>
        <ContactForm onAddSubmit={this.handleAddContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter onChange={this.handleFilter} />
        <ContactList
          listData={this.state.contacts}
          filterKey={this.state.filter}
          callbackfunc={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
