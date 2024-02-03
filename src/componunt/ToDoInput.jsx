import { useEffect, useState } from "react";
import { ToDoList, ToDoButton } from "./ToDoList";
import { Input } from "postcss";
import { v4 as uuidv4 } from "uuid";
export function ToDoInput({
  task,
  setTask,
  taskList,
  setTaskList,
  index,
  setIndex
}) {
  //   console.log(taskList, "taskList");
  //   console.log(task.task, 67890);

  function handleInput(e) {
    const usertask = e.target.value;
    const taskInput = {
      task: usertask,
      id: uuidv4(), // Generate a unique identifier using uuid
      isChecked: false
    };
    setTask(taskInput);
  }

  function handleAdd() {
    if (index >= 0) {
      taskList.splice(index, 1, task);
      setIndex();
    } else if (task.task.trim() !== "") {
      // Check if the trimmed task is not empty
      setTaskList([...taskList, task]);
    }
    setTask({
      task: "",
      id: "",
      isChecked: false
    });
    updatetodos([...taskList, task]);
    // updatetodos(taskList);
  }

  function updatetodos(list) {
    localStorage.setItem("listToDo", JSON.stringify(list));
  }

  useEffect(() => {
    const dataFromLocal = JSON.parse(localStorage.getItem("listToDo"));
    if (dataFromLocal) {
      setTaskList(dataFromLocal);
    }
  }, []);

  return (
    <>
      <h1 className="text-3xl text-b mb-2 mt-4 underline md:text-4xl ">
        TO Do List
      </h1>
      <div className="flex justify-center mb-3 px-2">
        <input
          value={task.task}
          type="text"
          placeholder="Add task "
          className="bg-gray-100 border-yellow-400 border-2 rounded-md md:text-xl   "
          onChange={handleInput}
        />
        {/* <button className="bg-gray-100 border-yellow-400 border-2 rounded-md ml-1">
          Add
        </button> */}
        <ToDoButton onClick={handleAdd}>Add </ToDoButton>
      </div>
    </>
  );
}
