import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./features/Todo/todoSlice";

// create redux store

const store = configureStore({
  reducer: {
    todosLoad: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

// export store

export default store;
