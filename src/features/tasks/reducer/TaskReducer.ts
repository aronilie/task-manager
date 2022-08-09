import { createReducer } from "@reduxjs/toolkit";
import { Task } from "../models/Task";

export const initialState: Task[] = [];

export const taskToDoReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state: Task[]) => [...state]);
});
