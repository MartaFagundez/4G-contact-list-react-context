import React from 'react'
import { useNavigate } from 'react-router'

export default function ContactCard({contact}) {
  const navigate = useNavigate();


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
        <button className="btn color-blue"><i className="fa-solid fa-trash-can"></i></button>
      </div>

    </div>
  )
}
