// components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarStyles.css';


export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    alert(`Você selecionou: ${newDate.toLocaleDateString()}`);
  };

  return (
    <div>
      <h2>Selecione uma Data</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <p>Data Selecionada: {date.toLocaleDateString()}</p>
    </div>
  );
}
