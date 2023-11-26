import React, { useEffect, useState } from 'react';
import img1 from "../../img/perfil1.png";
import img2 from "../../img/perfil2.png";
import img3 from "../../img/perfil3.png";
import img4 from "../../img/perfil4.png";
import img5 from "../../img/perfil5.png";
import img6 from "../../img/perfil6.png";
import img7 from "../../img/perfil7.png";
import img8 from "../../img/perfil8.png";
import ContactCard from '../component/contact-card';
import { useNavigate } from 'react-router';

export default function ContactList() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContactsFromApi();
  }, []);

  async function getContactsFromApi() {
    const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/martafagundez");
    const agenda = await response.json();
    setContacts(agenda);
  }

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  return (
    <div className='container d-flex w-100'>
      <div className='row w-100 d-flex flex-column align-items-center m-0'>
        <header className='col-12 col-lg-8 d-flex justify-content-between align-items-center'>
          <h2 className="fs-5 my-5 fw-bold" style={{fontFamily: '"Montserrat Alternates", sans-serif'}}>My Contacts</h2>
          <button className='btn fs-6 color-blue bg-yellow' onClick={() => navigate("/contacts/new")}>New Contact</button>
        </header>

        {/* Card List */}
        <main className='col-12 col-lg-8 d-flex flex-column align-items-start mb-5'>
          {
            contacts.length > 0 ? 
              contacts.toReversed().map((contact, index) => {
                return <ContactCard key={index} contact={{...contact, image: getRandomImage()}} handleDelete={getContactsFromApi} />
              })
              : 
              <p>No hay contactos en la agenda.</p>
          }
        </main>

      </div>
    </div>
  )
}
