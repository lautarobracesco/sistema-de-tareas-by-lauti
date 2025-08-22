export default function TaskList({ title, tasks, onToggle, onDeleteAll }) {
  return (
    <div className="bg-white shadow rounded p-4 w-full max-w-md mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">{title}</h2>
        {onDeleteAll && (
          <button
            onClick={onDeleteAll}
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        )}
      </div>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Tarea</th>
            <th className="p-2">Done</th>
            <th className="p-2">Id</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="border-b">
              <td className="p-2">{task.description}</td>
              <td className="p-2 text-center">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => onToggle(task.id)}
                />
              </td>
              <td className="p-2 text-center">{task.id}</td>
            </tr>
          ))}
          {tasks.length === 0 && (
            <tr>
              <td colSpan="3" className="p-2 text-center text-gray-500">
                No hay tareas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
