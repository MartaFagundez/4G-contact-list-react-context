import React, { useReducer, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {reducer} from "./reducer";
import { setContacts } from "./actions";
import { fetchContacts} from "../../client-API/contacts-api";


// Crear el contexto para el store
const ContactContext = createContext({});

// Estado global inicial
const initialState = {
  contacts: []
};

// Proveedor del store
const ContactProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sincronizar el estado global con los contactos de la API al montar el componente
  useEffect(() => {
    syncContactList();

  }, []); 


  // ============ MÉTODOS QUE DESPACHAN ACCIONES ============= //
  const syncContactList = () => {
    fetchContacts()
      .then(data => {
        // Despacha la acción al reducer
        dispatch(setContacts(data));
    });
  };
  

  return (
    <ContactContext.Provider value={{ state, syncContactList }}>
      {children}
    </ContactContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact debe ser usado dentro de un ContactProvider');
  }
  return context;
};

export { ContactProvider, useContact };