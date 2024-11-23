import { useState } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const [tripName, setTripName] = useState('');
  const router = useRouter();

  const handleCreateTrip = () => {
    if (!tripName) return alert('Dê um nome à sua viagem!');
    const tripId = new Date().getTime();
    router.push(`/trip/${tripId}`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Planejador de Viagens</h1>
      <input
        type="text"
        placeholder="Nome da Viagem"
        value={tripName}
        onChange={(e) => setTripName(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
      />
      <br />
      <button onClick={handleCreateTrip} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Criar Viagem
      </button>
    </div>
  );
}