import { createSlice } from "@reduxjs/toolkit";

const Presonal_ExpenseSlicer = createSlice({
  name: "Presonal_Expense",
  initialState: { Expense: [], ExpanseAmount: 0, Remaining_Balance: 0 },
  reducers: {
    addExpeseData: (state, action) => {
      state.Expense.push(action.payload);
      state.ExpanseAmount = state.Expense.reduce(
        (acc, curr) => +curr.amount + acc,
        0
      );
    },
    salaryDecrement: (state, action) => {
      state.Remaining_Balance = action.payload - state.ExpanseAmount;
    },
  },
});
export default Presonal_ExpenseSlicer.reducer;
export const { addExpeseData, salaryDecrement } =
  Presonal_ExpenseSlicer.actions;
