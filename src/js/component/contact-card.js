import React from 'react';
import { useNavigate } from 'react-router';
import { deleteContactApi } from "../../client-API/contacts-api";
import { useContact } from '../store/contactsStore';

export default function ContactCard({contact}) {
  const navigate = useNavigate();
  const { syncContactList } = useContact();

  function handleDelete(id) {
    deleteContactApi(id)
      .then(() => {
        syncContactList();
      });
  }

  return (
      <div className="d-flex flex-column flex-md-row align-items-center w-100 bg-white p-4 rounded shadow-sm mb-3">

        {/* Card Image */}
        <figure className='d-flex overflow-hidden rounded-circle shadow-sm m-0 mb-4 mb-md-0 me-md-4' style={{width: "120px", height: "120px", border: "3px solid #425ab2"}}>
          <img src={contact.image} alt="" className='w-100'/>
        </figure>

        <div className="d-flex flex-column px-4 px-md-0 mb-4 mb-md-0">
          <h4 className='text-center text-md-start fw-bold fs-5'>{contact.full_name}</h4>
          <p className='fs-6 my-0'><i className="fa-solid fa-location-dot me-3"></i>{contact.address}</p>
          <p className='fs-6 my-0'><i className="fa-solid fa-phone me-3"></i>{contact.phone}</p>
          <p className='fs-6 my-0'><i className="fa-solid fa-envelope me-3"></i>{contact.email}</p>
        </div>

        <div className="d-flex justify-self-end ms-auto">
          <button className="btn color-blue" onClick={() => navigate(`/contacts/edit/${contact.id}`)} ><i className="fa-solid fa-pen"></i></button>
          <button className="btn color-blue" data-bs-toggle="modal" data-bs-target={`#deleteModal${contact.id}`}><i className="fa-solid fa-trash-can"></i></button>
        </div>

      {/* Modal */}
      <div className="modal fade" id={`deleteModal${contact.id}`} tabIndex={-1} aria-labelledby={`deleteModal${contact.id}Label`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`deleteModal${contact.id}Label`}>Delete contact</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Do you confirm that you want to permanently delete this contact?</p>
              <p>This is an action that cannot be undone.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={() => handleDelete(contact.id)} data-bs-dismiss="modal" >Delete</button>
            </div>
          </div>
        </div>
      </div>

      </div>
  )
}
