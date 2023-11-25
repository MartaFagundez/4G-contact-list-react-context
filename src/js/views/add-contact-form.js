import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function AddContact() {
  const navigate = useNavigate();
  
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  function handleClick(e) {
    e.preventDefault();
    postNewContactOnApi();
  }

  async function postNewContactOnApi() {
    const newContact = {
      full_name: fullName,
      email,
      agenda_slug: "martafagundez",
      address,
      phone
    };
    
    try {
      const response = await fetch("https://playground.4geeks.com/apis/fake/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)
      });

      if(response.status === 201) {
        navigate("/contacts");
      }
      else {
        alert("An error occurred while trying to create the contact.")
      }
    } catch (error) {
      alert("An error occurred while trying to create the contact.");
      console.log(error);
    }
  }


  return (
    <div className="container">
      <div className='row w-100 d-flex flex-column align-items-center m-0'>
      
      {/* Header */}
      <header className='col-12 col-lg-8 d-flex justify-content-between align-items-center'>
          <h2 className="fs-5 my-5 fw-bold" style={{fontFamily: '"Montserrat Alternates", sans-serif'}}>Add New Contact</h2>
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

        {/* Button */}
        <button className="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>

      </div>
    </div>
  )
}
