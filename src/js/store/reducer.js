// Tipos de acciones
import { SET_CONTACTS } from "./action-types";


// Reducer para gestionar el estado global
export const reducer = (state, action) => {
    switch (action.type) {
      case SET_CONTACTS:
        return { contacts: action.payload };
      default:
        return state;
    }
};