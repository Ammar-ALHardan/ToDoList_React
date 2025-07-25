import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setenteredTask] = useState('');

  function handleChange(event) {
    setenteredTask(event.target.value);
  }

  function handleClick(){
    if (enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask);
    setenteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input 
      type="text" 
      className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
      onChange={handleChange}
      value={enteredTask}
      />
      <button className="text-stone-700 hover:text-slate-950" onClick={handleClick}>Add Task</button>
    </div>
  );
}
