import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";
import todoReducer from "../features/todo/todoSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        todo: todoReducer,
    },
});
