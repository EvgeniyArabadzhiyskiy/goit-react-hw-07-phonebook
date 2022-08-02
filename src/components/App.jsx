import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from 'components/FilterContacts/FilterContacts';

// import { fetchAllContacts } from 'redux/contacts/contacts-operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { contactsSelectors } from 'redux/contacts/contacts-selectors';


import { useGetAllContactsQuery } from 'redux/contacts/servises/contactAPI';



const App = () => {
  // const dispatch = useDispatch();
  // const phoneContacts = useSelector(contactsSelectors.getItems)
  // const isLoading = useSelector(contactsSelectors.getLoading)
  // const error = useSelector(state => state.contacts.error)

  // useEffect(() => {
  //   dispatch(fetchAllContacts());
  // }, [dispatch]);

  const { data: contacts=[], isFetching, error } = useGetAllContactsQuery()
  // console.log("App ~ contacts", contacts);

  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <PhoneForm contacts={contacts} />
        </Section>

        <Section title="Find contacts by name">
          <FilterContacts />
          {error && <h1 style={{color:"red"}}>{`Sorry, ${error.data}`}</h1>}
        </Section>


        {isFetching && <h2>Loading...</h2>}

        {contacts.length > 0 ? <Section title="Contacts">

          <ContactList contacts={contacts} />
        </Section> : <Section title="Phone book is empty" />}
      </Container>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </div>
  );
};

export default App;


























// const App = () => {
//   const dispatch = useDispatch();
//   const phoneContacts = useSelector(contactsSelectors.getItems)
//   const isLoading = useSelector(contactsSelectors.getLoading)
//   const error = useSelector(state => state.contacts.error)

//   useEffect(() => {
//     dispatch(fetchAllContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <Container>
//         <Section title="Phonebook">
//           <PhoneForm />
//         </Section>

//         <Section title="Find contacts by name">
//           <FilterContacts />
//           {error && <h1 style={{color:"red"}}>{`Sorry, ${error}`}</h1>}
//         </Section>


//         {isLoading && <h2>Loading...</h2>}

//         {phoneContacts.length > 0 ? <Section title="Contacts">

//           <ContactList />
//         </Section> : <Section title="Phone book is empty" />}
//       </Container>
//       <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
//     </div>
//   );
// };

// export default App;
