// Obtener todos los contactos de la api
export const fetchContacts = async () => {
    try {
      const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/martafagundez');
      if (!response.ok) {
        throw new Error('Error al obtener contactos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
  
  // Agregar un contacto en la api
  export const addContactApi = async newContact => {
    try {
      const response = await fetch('https://playground.4geeks.com/apis/fake/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      });
  
      if (!response.ok) {
        throw new Error('Error al agregar contacto');
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  // Obtener un contacto de la api
  export const fetchContact = async contactId => {
    try {
      const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`);
  
      if (!response.ok) {
        throw new Error('Error al eliminar contacto');
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };


  export const updateContactApi = async (contactId, newContact) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)
      });
  
      if (!response.ok) {
        throw new Error('Error al modificar contacto');
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  
  // Eliminar un contacto de la api
  export const deleteContactApi = async contactId => {
    try {
      const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar contacto');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };