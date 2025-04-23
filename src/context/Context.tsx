import React, { createContext, useState, useEffect } from "react";
import { Task } from "../types/Task";

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  editTask: (id: string, newText: string) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now().toString(), text, completed: false }]);
  };

  const editTask = (id: string, newText: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  const deleteTask = (id: string) => {
    if (window.confirm("Delete this task?")) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const toggleComplete = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};
