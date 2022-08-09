import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { taskToDoReducer } from "../../features/tasks/reducer/TaskToDoReducer";

export const store = configureStore({
  reducer: {
    tasksToDo: taskToDoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
