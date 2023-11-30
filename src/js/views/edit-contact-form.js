import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { fetchContact, updateContactApi } from "../../client-API/contacts-api";
import { useContact } from '../store/contactsStore';

export default function EditContact() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { syncContactList }  = useContact();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agendaSlug, setAgendaSlug] = useState("");

  useEffect(() => {
    getContactFromApi(id);

  }, []);


  function handleSave(e) {
    e.preventDefault();

    const contact = {
      full_name: fullName,
      email,
      agenda_slug: agendaSlug,
      address,
      phone
    };
    
    updateContactApi(id, contact)
      .then(() => {
        syncContactList();
        navigate("/contacts");
      })
  }

  function getContactFromApi(id) {
    fetchContact(id)
      .then(data => {
        setFullName(data.full_name);
        setAddress(data.address);
        setPhone(data.phone);
        setEmail(data.email);
        setAgendaSlug(data.agenda_slug);
      })
  }


  return (
    <div className="container">
      <div className='row w-100 d-flex flex-column align-items-center m-0'>
      
      {/* Header */}
      <header className='col-12 col-lg-8 d-flex justify-content-between align-items-center'>
          <h2 className="fs-5 my-5 fw-bold" style={{fontFamily: '"Montserrat Alternates", sans-serif'}}>Edit Contact</h2>
      </header>

      {/* Form */}
      <form className='col-12 col-lg-8'>

        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>

        <div className="row mb-4">

          {/* Phone */}
          <div className="col-12 col-lg-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
          </div>

          {/* Email */}
          <div className="col-12 col-lg-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex w-100 justify-content-end mb-4">
          <button className="btn btn-primary me-2" onClick={handleSave}>Save</button>
          <button className="btn btn-danger" onClick={() => navigate("/contacts")} >Cancel</button>
        </div>
      </form>

      </div>
    </div>
  )
}
