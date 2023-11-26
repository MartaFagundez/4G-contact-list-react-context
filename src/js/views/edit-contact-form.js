import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

export default function EditContact() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  console.log("id: ", id);

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
    putContactOnApi(id);
  }

  async function getContactFromApi(id) {
    try {
      const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`);

      if(response.status === 200) {
        const data = await response.json();
        setFullName(data.full_name);
        setAddress(data.address);
        setPhone(data.phone);
        setEmail(data.email);
        setAgendaSlug(data.agenda_slug);
      }
      else {
        alert("An error occurred while trying to obtain contact information.")
      }
    } catch (error) {
      alert("An error occurred while trying to obtain contact information.");
      console.log(error);
    }
  }

  async function putContactOnApi(id) {
    const contact = {
      full_name: fullName,
      email,
      agenda_slug: agendaSlug,
      address,
      phone
    };
    
    try {
      const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });

      if(response.status === 201) {
        alert("Contact modified successfully");
        navigate("/contacts");
      }
      else {
        alert("An error occurred while trying to save changes.")
      }
    } catch (error) {
      alert("An error occurred while trying to save changes.");
      console.log(error);
    }
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
