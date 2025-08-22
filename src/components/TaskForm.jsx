import { useState } from "react";
import UndoIcon from "./undoicon";


export default function TaskForm({ onAdd }) {
  const [desc, setDesc] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc.trim().length < 3 || desc.trim().length > 60)  return;
    onAdd(desc.trim());
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Ingrese Tarea"
        className="border border-gray-300 rounded px-3 py-2 flex-1"
      />
      
       <button
        type="submit"
        disabled={desc.trim().length < 3 || desc.trim().length > 60}
        className={`px-4 py-2 rounded border border-gray-300 text-sm 
          ${desc.trim().length < 3 || desc.trim().length > 60
            ? "bg-red-200 text-gray-500 cursor-not-allowed"
            : "bg-green-100 hover:bg-gray-200"}`}
        title="Agregar tarea"
      >
        <UndoIcon/>
      </button>
    </form>
  );


}
