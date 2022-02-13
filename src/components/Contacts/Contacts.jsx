import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Contacts = ({ contacts }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.listItem} key={id}>
          <span>{name}: </span>
          <span>{number}</span>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number,
    })
  ),
};

export default Contacts;
