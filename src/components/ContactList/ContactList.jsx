import ContactItem from './ContactItem/ContactItem';
import { Box } from '../Box/Box';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import contactsActions from 'redux/contacts/contacts-actions';
// import {deleteContact,toggleFavoritContact,} from 'redux/contacts/contacts-operations';
import { contactsSelectors } from 'redux/contacts/contacts-selectors';


import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useToggleFavoritesMutation,
} from 'redux/contacts/servises/contactAPI';

const ContactList = () => {
  // const dispatch = useDispatch();
  // const filtredContacts = useSelector(contactsSelectors.getVisibleContacts);

  const { data: contacts=[] } = useGetAllContactsQuery()
  const [deleteContactRTKQ] = useDeleteContactMutation();
  const [toggleFavoritesRTKQ] = useToggleFavoritesMutation();

  const filterContacts = useSelector(contactsSelectors.getFilter);
  

  const getVisibleContacts = () => {                                 // Без RTK Query эта функция была вынесена в contact-selectors
                                                                     // и была мемоизирована при помощм   CreateSelector
    const normalizedFilter = filterContacts.toLowerCase();           // Сейчас она находится всамом компоненте, а значение contacts 
                                                                     // для нее берется не из State , а из useGetAllContactsQuery() 
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filtredContacts = getVisibleContacts();

  const onDeleteContact = id => {
    deleteContactRTKQ(id);
    // dispatch(deleteContact(id));
  };

  const toggleContact = ({ id, favorites }) => {
    toggleFavoritesRTKQ({ id, favorites });
    // dispatch(toggleFavoritContact({ id, favorites }));
  };

  return (
    <Box border="normal" p={4} as="ul">
      {filtredContacts.map(({ id, name, number, favorites }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            favorites={favorites}
            onDeleteContact={() => onDeleteContact(id)}
            toggleFavoritContact={() =>
              toggleContact({ id, favorites: !favorites })
            }
          />
        );
      })}
    </Box>
  );
};

export default ContactList;
