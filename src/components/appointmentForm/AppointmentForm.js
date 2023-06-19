import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          required
          type="text"
          name="name"
          value={name}
          placeholder="Appointment Name"
          aria-label="Appointment Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <ContactPicker
        name="contact"
        value={contact}
        contacts={contactNames}
        onChange={(e) => setContact(e.target.value)}
      />
      <label>
        <input
          required
          type="date"
          name="date"
          value={date}
          min={getTodayString()}
          aria-label="Date Picker"
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        <input
          required
          type="time"
          name="time"
          value={time}
          aria-label="Time Picker"
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label>
        <input
          type="submit"
          aria-label="Add Appointment"
          value="Add Appointment"
        />
      </label>
    </form>
  );
};
