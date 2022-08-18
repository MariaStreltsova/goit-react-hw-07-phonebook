import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { ContactsApi } from './contactsApi';
import { filterReducer } from './myContacts/filterSlice';

export const store = configureStore({
  reducer: {
    [ContactsApi.reducerPath]: ContactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    ContactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
