import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/contactsSlice';
import { selectNameFilter } from '../../redux/filter/selectors';


export default function ContactList() {
const contacts = useSelector(selectContacts);
const dispatch = useDispatch();
const filter = useSelector(selectNameFilter) || "";
const filterContact = contacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase())); 

  return (
    <ul className={css.list}>
      {filterContact.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact 
          name={contact.name} 
          id={contact.id} 
          number={contact.number}
          onDelete={() => dispatch(deleteContact(contact.id))} />
        </li>
      ))}
    </ul>
  );
}
