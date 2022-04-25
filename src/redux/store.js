import { configureStore } from '@reduxjs/toolkit';
//import { createAction, createReducer } from '@reduxjs/toolkit';

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

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { createSlice, nanoid } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  whitelist: ['items'],
};

const myContacts = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: data => {
        const id = nanoid();
        return { payload: { id, ...data } };
      },
    },
    deleteContact(state, action) {
      state.items = [...state.items.filter(({ id }) => id !== action.payload)];
    },
    setfilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, myContacts.reducer);

export const { addContact } = myContacts.actions;

export const { setfilter } = myContacts.actions;

export const { deleteContact } = myContacts.actions;

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
