import { useState } from "react";
import "./App.css";
import { ToDoInput } from "./componunt/ToDoInput";
import { ToDoButton, ToDoList } from "./componunt/ToDoList";
// import { v4 as uuidv4 } from "uuid";
// const test = uuidv4();
// console.log(test, "uuid")[{ task: "task", id: "2134-45-234", ifChecked: true }];

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [index, setIndex] = useState();
  console.log(taskList, "task");
  return (
    <>
      <h1></h1>
      <TodoBackground>
        <ToDoInput
          task={task}
          setTask={setTask}
          taskList={taskList}
          setTaskList={setTaskList}
          index={index}
          setIndex={setIndex}
        />
        <ToDoList
          taskList={taskList}
          setTaskList={setTaskList}
          setTask={setTask}
          setIndex={setIndex}
        />
      </TodoBackground>
    </>
  );
}

export default App;
function TodoBackground({ children }) {
  return (
    <div className="bg-white md:w-[550px] pb-4 min-h-64 text-center mt-[18%] rounded-3xl border-4 border-black border-double">
      {children}
    </div>
  );
}
