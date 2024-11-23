// components/Tasks.js
import { useState } from 'react';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { name: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Adicionar</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTask(index)}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
