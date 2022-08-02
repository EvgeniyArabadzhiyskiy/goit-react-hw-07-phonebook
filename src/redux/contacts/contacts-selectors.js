// import { createSelector } from '@reduxjs/toolkit';

// const getItems = state => state.contacts.items;     // Раньше было в общем State Redux теперь вынесено в RTK  Query

const getFilter = state => state.contacts.filter;


// const getVisibleContacts = createSelector(            // createSelector Работал при использовании createAsyncThunk 
//   [getItems, getFilter],
//   (items, filterContacts) => {
//     const normalizedFilter = filterContacts.toLowerCase();

//     return items.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );

export const contactsSelectors = {
  // getItems,
  getFilter,
  // getVisibleContacts,
};























// const getVisibleContacts = state => {
//   const items = getItems(state);

//   const filterContacts = getFilter(state);

//   const normalizedFilter = filterContacts.toLowerCase();
//   return items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const getItems = state =>
//   state?.contactApi?.queries['getAllContacts(undefined)']?.data;
