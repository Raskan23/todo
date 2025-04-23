import React from "react";
import { TaskProvider } from "./context/Context";
import Form from "./component/Form";
import List from "./component/List";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <Form />
        <List />
      </div>
    </TaskProvider>
  );
};

export default App;
