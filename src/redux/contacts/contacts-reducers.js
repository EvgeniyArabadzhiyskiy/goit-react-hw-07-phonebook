import { combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { filteredContacts } from './contacts-actions';

const filterReducer = createReducer('', {
  [filteredContacts]: (_state, { payload }) => payload,
});

export const increment = createAction('counter/INCREMENT');

const counter = createReducer(0, {
  [increment]: state => state + 1,
});

export default combineReducers({
  filter: filterReducer,
  counter,
});














// import { fetchAllContacts, addContact, deleteContact, toggleFavoritContact } from './contacts-operations';

// const contactsReducer = createReducer([], {
//   [fetchAllContacts.fulfilled]: (_, {payload}) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
//   [toggleFavoritContact.fulfilled]: (state, { payload }) =>
//     state.map(contact => {
//       return contact.id === payload.id
//         ? payload
//         : contact;
//     }),
// });

// const loadingReducer = createReducer(false, {
//   [fetchAllContacts.pending]: () => true,
//   [fetchAllContacts.fulfilled]: () => false,
//   [fetchAllContacts.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
//   [toggleFavoritContact.pending]: () => true,
//   [toggleFavoritContact.fulfilled]: () => false,
//   [toggleFavoritContact.rejected]: () => false,
// })

// const errorReducer = createReducer(null, {
//   [fetchAllContacts.rejected]: (_, {payload}) => payload,
//   [fetchAllContacts.pending]: () => null,
//   [addContact.rejected]: (_, {payload}) => payload,
//   [addContact.pending]: () => null,
//   [deleteContact.rejected]: (_, {payload}) => payload,
//   [deleteContact.pending]: () => null,
//   [toggleFavoritContact.rejected]: (_, {payload}) => payload,
//   [toggleFavoritContact.pending]: () => null,
// })

// const contactsReducer = createReducer([], builder => {
//   builder
//     .addCase(contactsActions.addContact, (state, { payload }) => {
//       return [payload, ...state];
//     })
//     .addCase(contactsActions.deleteContact, (state, { payload }) => {
//       return state.filter(contact => contact.id !== payload);
//     })
//     .addCase(contactsActions.toggleFavoritContact, (state, { payload }) => {
//       return state.map(contact =>
//         contact.id === payload
//           ? { ...contact, favorites: !contact.favorites }
//           : contact
//       );
//     });
// });

// const filterReducer = createReducer('', builder => {
//   builder.addCase(contactsActions.filteredContacts, (_state, { payload }) => {
//     return payload;
//   });
// });

// export default combineReducers({
//   items: contactsReducer,
//   filter: filterReducer,
// });
