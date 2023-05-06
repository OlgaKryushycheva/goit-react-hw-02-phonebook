import { ContactItem } from './ConcactItem';

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
