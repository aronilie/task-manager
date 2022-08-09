import { Task } from "../models/Task";

export const addTaskToDoActionCreator = (task: Task): addTaskToDoAction => ({
  type: "addToDoTask",
  payload: task,
});
