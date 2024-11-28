// components/Itinerary.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';


export default function Itinerary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {
    const eventTitle = prompt('Digite o nome do evento:');
    if (eventTitle) {
      setEvents([...events, { date: selectedDate.toDateString(), title: eventTitle }]);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Itinerário</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date }) => {
          const event = events.find((event) => event.date === date.toDateString());
          return event ? <p style={{ fontSize: '12px', color: 'blue' }}>{event.title}</p> : null;
        }}
      />
      <button
        onClick={handleAddEvent}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          background: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Adicionar Evento
      </button>

      <div style={{ marginTop: '20px' }}>
        <h3>Eventos:</h3>
        {events.map((event, index) => (
          <p key={index}>
            {event.date} - {event.title}
          </p>
        ))}
      </div>
    </div>
  );
}
