import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  /*
  - Why not this instead of useEffect???
  - Are we really that worried about contacts or duplicate changing without the name changing?
  - How would that ever happen?
  
  const handleSetName = (name) => {
    setDuplicate(contacts.some((contact) => contact.name === name));
    setName(name);
  };
  */

  useEffect(() => {
    // .some() or .find() here???
    setDuplicate(contacts.some((contact) => contact.name === name));
  }, [name, contacts, duplicate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duplicate) {
      return;
    }
    console.log("HANDLE SUBMIT!");
    addContact(name, phone, email);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div>
      <section>
        <h2>Add Contact{duplicate ? " - Name Already Exists" : ""}</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
