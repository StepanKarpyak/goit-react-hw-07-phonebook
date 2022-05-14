import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    itemsDelete: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const contactsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addFilter, addItems, itemsDelete  } = contactsSlice.actions;
export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
