import { createSlice } from '@reduxjs/toolkit'

export const TodosSlices = createSlice({
  name: "TodosSlices",
  initialState: {
    items: []
  },
  reducers: {
    addTodo: function (state, action){
      state.items.push(action.payload)
    },
  }
})

export const {addTodo} = TodosSlices.actions;
export default TodosSlices.reducer;