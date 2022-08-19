import PropTypes from 'prop-types';
import { ContactsTitle, List } from './ContactsList.styled';
import { ContactItem } from './ContactItem';
import { useFetchContactsQuery } from '../../redux/contactsApi';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contactsSelectors';

export const ContactList = () => {
  const getVisibleContacts = (value, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };
  const { data: contacts } = useFetchContactsQuery();
  const value = useSelector(getFilter);
  let visibleContacts = null;
  if (contacts) {
    visibleContacts = getVisibleContacts(value, contacts);
  }
  return (
    <>
      <ContactsTitle>Contacts list</ContactsTitle>
      <List>
        {visibleContacts &&
          visibleContacts.map(({ name, phone, id }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
