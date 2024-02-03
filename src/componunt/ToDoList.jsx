import { defaults } from "autoprefixer";

export function ToDoList({ taskList, setTaskList, setTask, setIndex }) {
  function handleDelet(id) {
    const index = taskList.findIndex((item) => item.id === id);
    if (index !== -1) {
      const finalList = [...taskList];
      finalList.splice(index, 1);
      setTaskList(finalList);
      setIndex(index);
      // console.log(index, "delete");
    }
  }
  function handleEdit(id) {
    const indexEdit = taskList.findIndex((item) => item.id === id);
    setTask(taskList.at(indexEdit));
    setIndex(indexEdit);
  }
  // function handlecheckBox(event, id) {
  //   const isChecked = event.target.checked;
  //   const index = taskList.findIndex((item) => item.id === id);

  //   if (index !== -1) {
  //     const updatedList = [...taskList];
  //     const removedItem = updatedList.splice(index, 1)[0];
  //     removedItem.isChecked = isChecked;
  //     updatedList.push(removedItem);

  //     setTaskList(updatedList);
  //   }
  // }

  return (
    <>
      <div className="">
        {taskList.map((list) => (
          <li className=" flex w-full justify-center ">
            {/* <input
              type="checkbox"
              className={` mr-1 md:w-4`}
              onChange={(event) => handlecheckBox(event, list.id)}
            /> */}
            <span className="md:text-2xl">{list.task}</span>
            <ToDoButton onClick={() => handleEdit(list.id, list.task)}>
              Edit
            </ToDoButton>
            <ToDoButton onClick={() => handleDelet(list.id, list.task)}>
              Delete
            </ToDoButton>
          </li>
        ))}
      </div>
    </>
  );
}

export function ToDoButton({ children, onClick }) {
  return (
    <div>
      <button
        className="border-2 border-yellow-500 rounded-md ml-1 md:(w-16 h-10) "
        onClick={onClick}
      >
        <span className="md:text-xl">{children}</span>
      </button>
    </div>
  );
}
