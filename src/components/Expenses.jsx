// components/Expenses.js
import { useState } from 'react';

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [payer, setPayer] = useState('');
  const [amount, setAmount] = useState(0);

  const addExpense = () => {
    setExpenses([...expenses, { payer, amount }]);
    setPayer('');
    setAmount(0);
  };

  const calculateDivision = () => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    return total / expenses.length || 0;
  };

  return (
    <div>
      <h3>Adicionar Despesas</h3>
      <input
        type="text"
        placeholder="Quem pagou?"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={addExpense}>Adicionar</button>

      <h4>Total por pessoa: {calculateDivision().toFixed(2)}</h4>
    </div>
  );
}
