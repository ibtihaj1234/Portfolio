import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./TodoSlice";

export const store = configureStore({
    reducer: {
        Todos: TodosSlice
    }
})