import { configureStore } from '@reduxjs/toolkit';

// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducers from './contacts/contacts-reducers';
import { contactApi } from './contacts/servises/contactAPI';

const contactPersistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter', 'items'],
};

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
  // logger,
];

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactPersistConfig, contactsReducers),
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
