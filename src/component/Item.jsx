import React, { useState, useContext } from "react";
import { Task } from "../types/Task";
import { TaskContext } from "../context/Context";

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const taskCtx = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white shadow-sm px-4 py-3 rounded-xl border border-gray-200 mb-3 transition-all">
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => {
            taskCtx?.editTask(task.id, text);
            setIsEditing(false);
          }}
          className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          autoFocus
        />
      ) : (
        <span
          onClick={() => taskCtx?.toggleComplete(task.id)}
          className={`flex-1 text-base cursor-pointer break-words ${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-3 py-1 text-sm font-medium text-yellow-600 border border-yellow-300 hover:bg-yellow-100 rounded-md transition"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={() => taskCtx?.deleteTask(task.id)}
          className="px-3 py-1 text-sm font-medium text-red-600 border border-red-300 hover:bg-red-100 rounded-md transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
