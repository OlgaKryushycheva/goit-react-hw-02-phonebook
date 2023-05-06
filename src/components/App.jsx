import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <form action="">
          <label for="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label for="">
            Nomber
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <label for="">
          Find contacts by name
          <input type="text" />
        </label>

        <ul>
          <li>
            cont
            <button type="button">Delite</button>
          </li>
          <li>
            cont
            <button type="button">Delite</button>
          </li>
          <li>
            cont
            <button type="button">Delite</button>
          </li>
          <li>
            cont
            <button type="button">Delite</button>
          </li>
        </ul>
      </section>
    );
  }
}
