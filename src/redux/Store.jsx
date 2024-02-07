import { configureStore } from "@reduxjs/toolkit";
import CounterSlices from "./slices/ConterSlices";


export const store = configureStore({
    reducer: {
        counter: CounterSlices
    }

})