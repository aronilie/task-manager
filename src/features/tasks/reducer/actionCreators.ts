import { createAction } from "@reduxjs/toolkit";
import { Task } from "../models/Task";
import { ActionTypes } from "./actionTypes";

export const loadTasksAction = createAction<Task[]>(ActionTypes.tasksLoad);

export const updateTaskAction = createAction<Partial<Task>>(
  ActionTypes.tasksUpload
);

export const createTaskAction = createAction<Task>(ActionTypes.tasksCreate);

export const deleteTaskAction = createAction<Task["id"]>(
  ActionTypes.tasksDelete
);
