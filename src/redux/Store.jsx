import { configureStore } from "@reduxjs/toolkit";
import CounterSlices from "./slices/ConterSlices";
import TodosSlices from "./slices/TodosSlices";

export const store = configureStore({
    reducer: {
        Todos: TodosSlices,
        counter: CounterSlices
    }

})