// pages/trip/[id].js
import { useRouter } from 'next/router';
import Itinerary from '../../components/Itinerary';
import Expenses from '../../components/Expenses';
import Tasks from '../../components/Tasks';

export default function TripPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Detalhes da Viagem: {id}</h1>
      <nav style={{ marginBottom: '20px' }}>
        <a href="#itinerary" style={{ margin: '0 10px' }}>Itinerário</a>
        <a href="#expenses" style={{ margin: '0 10px' }}>Despesas</a>
        <a href="#tasks" style={{ margin: '0 10px' }}>Tarefas</a>
      </nav>

      <section id="itinerary">
        <h2>Itinerário</h2>
        <Itinerary />
      </section>

      <section id="expenses">
        <h2>Despesas</h2>
        <Expenses />
      </section>

      <section id="tasks">
        <h2>Tarefas</h2>
        <Tasks />
      </section>
    </div>
  );
}
