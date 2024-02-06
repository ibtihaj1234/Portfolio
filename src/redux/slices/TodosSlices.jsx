import { createSlice } from '@reduxjs/toolkit'

export const TodosSlices = createSlice({
  name: "TodosSlices",
  initialState: {
    items: []
  },
  reducers: {
    addTodo: function (state, action) {
      state.items.push(action.payload)
    },
    removeTodo: function (state, action) {

    }
  }
})

export const { addTodo } = TodosSlices.actions;
export default TodosSlices.reducer;