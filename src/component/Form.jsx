import React, { useState, useContext } from "react";
import { TaskContext } from "../context/Context";

const TaskForm: React.FC = () => {
  const [text, setText] = useState("");
  const taskCtx = useContext(TaskContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      taskCtx?.addTask(text);
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 mb-6 w-full"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you want to do?"
        className="flex-1 w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition duration-200 ease-in-out"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
