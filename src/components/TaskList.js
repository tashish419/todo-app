import React, { useState } from "react";
import ToDo from "./ToDo";

const TaskList = ({ taskList, onDeleteToDo }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const handleColorOnClick = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          className={` bg-green-700 p-2 my-2  font-semibold text-lg ${
            isCompleted === false && "active:bg-green-700"
          }`}
          onClick={handleColorOnClick}
        >
          Todo
        </button>
        <button
          className={`bg-gray-700 p-2 my-2 font-semibold text-lg ${
            isCompleted === true && "active:bg-green-700"
          }`}
          onClick={handleColorOnClick}
        >
          Completed
        </button>
      </div>
      <div>
        <ul>
          {taskList.map((task, index) => {
            return <ToDo task={task} key={index} id={index} onDeleteToDo={onDeleteToDo}/>
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
