import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo } from "../../app/features/Todo/todoSlice";

const Todo = () => {
  const { todosData } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    status: "Pending",
  });

  const handleInputChanges = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //   create todo form submit
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(input));
    setInput({
      name: "",
      status: "Pending",
    });
  };

  //   delete todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div className="w-[1000px] mx-auto mt-20 p-4">
        <form onSubmit={handleTodoSubmit} className="flex gap-2">
          <input
            className="p-1 font-medium outline-none border border-sky-200 rounded-sm"
            type="text"
            name="name"
            placeholder="Todo Name"
            value={input.name}
            onChange={handleInputChanges}
          />
          <select
            className="p-1 font-medium outline-none border border-sky-200 rounded-sm w-[200px]"
            name="status"
            value={input.name}
            onChange={handleInputChanges}
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Done">Done</option>
          </select>
          <button
            type="submit"
            className="py-1 px-2 font-semibold bg-blue-600 text-slate-200 rounded-md"
          >
            Create
          </button>
        </form>
        <hr />
        <h1 className="text-2xl font-semibold">ALL TODO LIST</h1>
        <ul>
          {todosData.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-between w-[700px] p-4 rounded-sm bg-slate-50 my-1"
              >
                <span className="flex gap-2">
                  <button
                    onClick={() => handleDeleteTodo(item.id)}
                    className="border-none text-sky-100 rounded-md bg-red-500 p-1 font-bold"
                  >
                    X
                  </button>
                  <h2>{item.name}</h2>
                </span>
                <span className="flex gap-1">
                  <button className="border-none text-sky-100 rounded-md bg-orange-400 p-1 font-bold">
                    Pending
                  </button>
                  <button className="border-none text-sky-100 rounded-md bg-sky-500 p-1 font-bold">
                    Processing
                  </button>
                  <button className="border-none text-sky-100 rounded-md bg-green-500 p-1  font-bold">
                    Done
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
