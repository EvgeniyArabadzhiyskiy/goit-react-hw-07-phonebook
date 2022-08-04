export const getFilter = state => state.contacts.filter;




























// const getVisibleContacts = createSelector(
//   [getItems, getFilter],
//   (items, filterContacts) => {
//     console.log('Hello');
//     const normalizedFilter = filterContacts.toLowerCase();

//     return items.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
