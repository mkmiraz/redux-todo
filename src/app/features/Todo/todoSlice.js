import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../../data/todo";

// create todo slice
const todoSlice = createSlice({
  name: "todoLoad",
  initialState: {
    todosArr: [],
    error: null,
    message: null,
    loader: false,
  },
  reducers: {
    loadAllTodos: (state, action) => {
      state.todosArr = todos;
    },
  },
});

//
export const { loadAllTodos } = todoSlice.actions;

// export todo reducer
export default todoSlice.reducer;
