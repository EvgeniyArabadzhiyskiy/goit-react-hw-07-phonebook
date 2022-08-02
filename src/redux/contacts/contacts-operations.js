// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL =
//   'https://62e65af1de23e263792af968.mockapi.io/api/stars-numbers';

// export const fetchAllContacts = createAsyncThunk(
//   'contacts/GET_ALL',
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await axios.get('/contacts?sortBy=name');
//       return res.data;
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/ADD',
//   async ({ name, number }, { rejectWithValue }) => {
//     try {
//       const newContact = {
//         name,
//         number,
//         favorites: false,
//       };
//       const res = await axios.post('/contacts', newContact);
//       return res.data;
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/DELETE',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       await axios.delete(`/contacts/${contactId}`);
//       return contactId;
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const toggleFavoritContact = createAsyncThunk(
//   'contacts/TOGGLE',
//   async ({ id, favorites }, { rejectWithValue }) => {
//     try {
//       const updateContact = { favorites };
//       const res = await axios.put(`/contacts/${id}`, updateContact);
//       return res.data;
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
