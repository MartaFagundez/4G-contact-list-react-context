import { SET_CONTACTS } from './action-types';

// Acciones a ejecutar sobre el array de contactos del store
export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts,
});