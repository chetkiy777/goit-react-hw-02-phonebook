import React from 'react';
import styles from './styles.module.css';
import shortid from 'shortid';

export class InfoInput extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  onNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(contact);
    this.resetForm();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={e => this.onNameChange(e)}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={e => this.onNumberChange(e)}
          />
        </label>

        <button className={styles.submitButton} type="submit">
          add contact
        </button>
      </form>
    );
  }
}
