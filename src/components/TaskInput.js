import React, { useState } from "react";
import TaskList from "./TaskList";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  
  const handleAddToDo = (taskList) => {
    setTaskList((taskList) => {
      return [...taskList, task];
    })
    // console.log(taskList);
    setTask("")
  };

  const handleDeleteToDo = (id) => {
    setTaskList(taskList.filter((todo, index)=> {
      return index !== id;
    }))
  };

  return (
    <div>
      <form className="flex justify-around mx-2 my-10" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Add text..."
          className="p-2  w-[80%] border-gray-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-green-600 px-6 py-2 rounded-lg"
          onClick={handleAddToDo}
        >
          Add
        </button>
      </form>
      <TaskList taskList={taskList} onDeleteToDo={handleDeleteToDo}/>
    </div>
  );
};

export default TaskInput;
