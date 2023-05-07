import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, onDeliteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeliteContact={onDeliteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeliteContact: PropTypes.func.isRequired,
};
