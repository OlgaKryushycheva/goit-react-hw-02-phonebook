import PropTypes from 'prop-types';

export const ContactItem = ({
  contact: { id, name, number },
  onDeliteContact,
}) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDeliteContact(id)}>Delite</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeliteContact: PropTypes.func.isRequired,
};
