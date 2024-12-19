import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { loadAllTodos } from "./app/features/Todo/todoSlice";
import Todo from "./components/Todo/Todo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllTodos());
  }, [dispatch]);

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
