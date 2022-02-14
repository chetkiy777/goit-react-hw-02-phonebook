import React from 'react';
import Contacts from './Contacts/Contacts';
import styles from './styles.module.css';
import { Filter } from './Filter/Filter';

import { ContactForm } from './ContactForm/ContactForm';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtered = () => {
    return [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />

        <h1>Contacts</h1>
        <Filter onInput={this.onInput} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          filtered={this.filtered}
        />
      </div>
    );
  }
}
