import React, { useContext } from "react";
import { TaskContext } from "../context/Context";
import TaskItem from "./Item";

const TaskList: React.FC = () => {
  const taskCtx = useContext(TaskContext);

  if (!taskCtx?.tasks.length) {
    return (
      <div className="text-center text-gray-400 mt-10 text-lg italic">
         No tasks available. You're all caught up!
      </div>
    );
  }

  return (
    <div className="space-y-3 mt-4">
      {taskCtx.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
