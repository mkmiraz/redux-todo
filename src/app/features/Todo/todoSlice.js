import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../../data/todo";

// create todo slice
const todoSlice = createSlice({
  name: "todoLoad",
  initialState: {
    todosData: [],
    error: null,
    message: null,
    loader: false,
  },
  reducers: {
    loadAllTodos: (state) => {
      state.todosData = todos;
    },

    // create todo
    createTodo: (state, action) => {
      state.todosData.push({
        ...action.payload,
        id: state.todosData.length + 1,
      });
    },

    // delete todo
    deleteTodo: (state, action) => {
      state.todosData = state.todosData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

//
export const { loadAllTodos, createTodo, deleteTodo } = todoSlice.actions;

// export todo reducer
export default todoSlice.reducer;
