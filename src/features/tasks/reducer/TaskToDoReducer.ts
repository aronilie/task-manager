import { createReducer } from "@reduxjs/toolkit";
import { TaskToDo } from "../models/TaskToDo";

export const initialState: TaskToDo[] = [];

export const taskToDoReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state: TaskToDo[]) => [...state]);
});
