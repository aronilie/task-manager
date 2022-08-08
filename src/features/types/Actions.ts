import { TaskToDo } from "../ToDo/models/TaskToDo";
import ActionTypes from "./ActionTypes";

export interface AnyAction {
  type: any;
}

export interface Action extends AnyAction {
  type: ActionTypes;
}

export interface addToDoTaskAction extends Action {
  payload: TaskToDo;
}
