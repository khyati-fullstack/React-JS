import { configureStore } from "@reduxjs/toolkit";
import Counter from "../Feature/Counter";
import Score from "../Feature/Score";
import Todo from "../Feature/Todo";
import Presonal_Expense from "../Feature/finance";
export const Store = configureStore({
  reducer: {
    counterkey: Counter,
    scorekey: Score,
    todokey: Todo,
    preosnalExpesekey: Presonal_Expense,
  },
});
