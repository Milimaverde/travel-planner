import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import TripContext from '../context/TripContext';

export default function HomePage() {
  const {trip, setTrip} = useContext(TripContext);
  const [tripName, setTripName] = useState('');
  const router = useRouter();

  const handleCreateTrip = () => {
    if (!tripName) return alert('Dê um nome à sua viagem!');
    const tripId = new Date().getTime();
    setTrip([ ...trip, { id: tripId, name: tripName}])
    router.push(`/trip/${tripId}`);
  };

  return (
  <>
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Planejador de Viagens</h1>
        <div>
         <h3>Crie uma Nova Viagem</h3>
          <input
          type="text"
          placeholder="Nome da Viagem"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
          />
         <br />
        </div>
        <div>
        <h3>Tempo da Viagem</h3>
        <label>Data de Ida: </label>
        <input
          type="date"
          style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
        />
        <label>Data de Retorno: </label>
        <input
          type="date"
          style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
        />
        

        </div>
      


      <button onClick={handleCreateTrip} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Criar Viagem
      </button>
    </div>

    <div>
      <h2>Viagens Criadas</h2>
      <ul>
        {trip.map((trip) => (
          <li key={trip.id}>
            <a href={`/trip/${trip.id}`}>{trip.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
}