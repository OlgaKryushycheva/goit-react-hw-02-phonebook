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
