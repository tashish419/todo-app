import React from "react";

const ToDo = ({task, id, onDeleteToDo }) => {

  return (
    <div className="flex justify-around mx-2">
      <li className="p-2 m-2 w-[80%] bg-white text-black">
        {task}
      </li>
      <button
        className="bg-green-600 px-6 py-2 m-2 rounded-lg"
        onClick={() => {
            onDeleteToDo(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDo;
