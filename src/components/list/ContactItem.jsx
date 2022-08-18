import { ContactsItem, DeleteButton, Text } from './ContactsItem.styled';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import { Spinner } from 'components/spinner/Spiner';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ContactsItem>
      <Text>Name: {name}</Text>
      <Text>Number: {phone}</Text>
      <DeleteButton
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting && <Spinner size={12} />}
        Delete
      </DeleteButton>
    </ContactsItem>
  );
};
