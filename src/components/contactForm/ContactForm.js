import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          required
          type="text"
          name="name"
          value={name}
          placeholder="Contact Name"
          aria-label="Contact Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          required
          type="text"
          name="phone"
          value={phone}
          placeholder="Contact Phone"
          aria-label="Contact Phone"
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        <input
          required
          type="text"
          name="email"
          value={email}
          placeholder="Contact Email"
          aria-label="Contact Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Add Contact" aria-label="Add Contact" />
    </form>
  );
};
