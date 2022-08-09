import { createReducer } from "@reduxjs/toolkit";
import { Task } from "../models/Task";
import * as action from "./actionCreators";

const initialState: Task[] = [
  {
    id: 0,
    name: "",
    done: false,
  },
];

export const tasksReducer = createReducer(initialState, (builder) => {
  builder.addCase(action.loadTasksAction, (_state, action) => action.payload);

  builder.addCase(action.updateTaskAction, (state, action) =>
    state.map((item) =>
      item.id !== action.payload.id ? item : { ...item, ...action.payload }
    )
  );

  builder.addCase(action.createTaskAction, (state, action) => [
    ...state,
    action.payload,
  ]);

  builder.addCase(action.deleteTaskAction, (state, action) =>
    state.filter((item) => item.id !== action.payload)
  );

  builder.addDefaultCase((state: Task[]) => [...state]);
});
