import { useState } from 'react';
import { ImUserPlus } from 'react-icons/im';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetAllContactsQuery } from 'redux/contacts/servises/contactAPI';

import Modal from './Modal/Modal';
import Button from './Button/Button';
import { Spinner } from './Spinner/Spinner';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from 'components/FilterContacts/FilterContacts';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: contacts = [], isFetching, error } = useGetAllContactsQuery();

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <Button type="button" onClick={toggleModal}>
            <ImUserPlus size={18} /> Add Contact
          </Button>
          {isOpen && (
            <Modal closeModal={toggleModal}>
              <PhoneForm onSaveAndClose={toggleModal} />
            </Modal>
          )}
        </Section>

        <Section title="Find contacts by name">
          <FilterContacts />
          {error && <h1 style={{ color: 'red' }}>{`Sorry, ${error.data}`}</h1>}
        </Section>

        <Section title="Contacts">
          {isFetching && <Spinner size={28} />}
          {contacts.length > 0 ? (
            <ContactList />
          ) : (
            <h3 style={{ color: 'blue' }}>Phone book is empty</h3>
          )}
        </Section>
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
