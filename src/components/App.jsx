import React from 'react';
import Contacts from './Contacts/Contacts';
import styles from './styles.module.css';
import { Filter } from './Filter/Filter';
import { InfoInput } from './InfoInput/InfoInput';

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

  filterContacts = finder => {
    const namesArr = this.state.contacts.map(contact => {
      if (contact.name === finder) {
        return console.log(finder);
      }
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <InfoInput addContact={this.addContact} />
        <Filter
          contacts={this.state.contacts}
          filterContacts={this.filterContacts}
        />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
