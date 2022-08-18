import { Formik } from 'formik';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';

import { Box, Input, InputName, SubmitButton } from './FormContacts.styled';

export const ContactsReviewForm = () => {
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();
  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const contactsNames = contacts.map(contact => contact.name);
    if (contactsNames.includes(name)) {
      alert(` ${name} is already in contacts.`);
      return;
    }
    try {
      createContact({ name, phone });
    } catch (err) {
      alert(`please, try again`);
    }
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <Box>
        <InputName>
          name
          <Input
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="enter new contacts' name"
          />
        </InputName>
        <InputName>
          phone
          <Input
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="enter new contacts' phone number"
          />
        </InputName>
        <SubmitButton type="submit">Add contacts</SubmitButton>
      </Box>
    </Formik>
  );
};
