import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1000 },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
    inc_by_user: (state, action) => {
      console.log("--->action : ", action);
      state.count += action.payload;
    },
    updateusername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, inc_by_user, updateusername } =
  counterSlice.actions;
