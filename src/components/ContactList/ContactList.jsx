import { useMemo } from 'react';
import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { useGetAllContactsQuery } from 'redux/contacts/servises/contactAPI';

import { Box } from '../Box/Box';
import ContactMobile from 'components/ContactMobile/ContactMobile';
import ContactDesctop from 'components/ContactDesctop/ContactDesctop';

const ContactList = () => {
  const isDesctop = useMedia('(min-width: 767px)');

  const { data: contacts = [] } = useGetAllContactsQuery();

  const filterContacts = useSelector(getFilter);

  const filtredContacts = useMemo(() => {
    const normalizedFilter = filterContacts.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filterContacts]);

  return (
    <>
      <Box border="normal" p={4} as="ul">
        {filtredContacts.map(({ id, name, number, favorites }) => {
          return (
            <div key={id}>
              {isDesctop ? (
                <ContactDesctop
                  id={id}
                  name={name}
                  number={number}
                  favorites={favorites}
                />
              ) : (
                <ContactMobile
                  id={id}
                  name={name}
                  number={number}
                  favorites={favorites}
                />
              )}
            </div>
          );
        })}
      </Box>
    </>
  );
};

export default ContactList;
