import React, { useState } from "react";

export default function TaskPlanner() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const removeTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <div className="min-h-screen bg-linear-to-br  text-white p-6 flex justify-center py-25 items-start">
      <div className="w-full max-w-xl border-2 p-4 rounded-2xl space-y-6">
        <h2 className="text-2xl font-bold">Task Planner</h2>
        <div className="flex gap-2 flex-wrap mb-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="New task..."
            className="flex-1 p-3 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((t) => (
            <li key={t.id} className="flex justify-between items-center bg-slate-700 p-3 rounded-lg">
              <span>{t.text}</span>
              <button
                onClick={() => removeTask(t.id)}
                className="text-red-400 hover:text-red-500 transition"
              >
                Remove
              </button>
            </li>
          ))}
          {tasks.length === 0 && <p className="text-gray-400">No tasks added yet.</p>}
        </ul>
      </div>
    </div>
  );
}
