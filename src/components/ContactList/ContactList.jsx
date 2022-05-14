import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/contactsSlice';
import ContactItem from '../ContactItem/ContactItem';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul>
      {filterContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}