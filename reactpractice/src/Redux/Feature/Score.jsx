import { createSlice } from "@reduxjs/toolkit";

const scoreReducer = createSlice({
  name: "score",
  initialState: { score: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("counter/increment", (state, action) => {
      state.score += 50;
    });
  },
});

export default scoreReducer.reducer;
