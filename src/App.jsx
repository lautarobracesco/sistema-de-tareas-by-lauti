import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (desc) => {
    const newTask = {
      id: Date.now(),
      description: desc,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteDoneTasks = () => {
    setTasks(tasks.filter(t => !t.done));
  };

  const pending = tasks.filter(t => !t.done);
  const completed = tasks.filter(t => t.done);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Lista de Tareas</h1>
      <TaskForm onAdd={addTask} />
      <TaskList title="Tareas Pendientes" tasks={pending} onToggle={toggleTask} />
      <TaskList title="Tareas Realizadas" tasks={completed} onToggle={toggleTask} onDeleteAll={deleteDoneTasks} />
    </div>
  );
}
