import { createAction } from '@reduxjs/toolkit';

export const filteredContacts = createAction('contacts/FILTER');







































// const addContact = createAction('contacts/ADD', ({ name, number }) => {
//   return {
//     payload: {
//       id: shortid(),
//       name,
//       number,
//       favorites: false,
//     },
//   };
// });

// const deleteContact = createAction('contacts/DELETE');

// const toggleFavoritContact = createAction('contacts/TOGGLE')

// const contactsActions = {
  // addContact,
  // deleteContact,
  // filteredContacts,
  // toggleFavoritContact,
// };

// export default contactsActions;
