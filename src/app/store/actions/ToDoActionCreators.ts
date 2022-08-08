import { TaskToDo } from "../../../features/ToDo/models/TaskToDo";
import { addToDoTaskAction } from "../../../features/types/Actions";

export const addToDoTaskActionCreator = (
  task: TaskToDo
): addToDoTaskAction => ({
  type: "addToDoTask",
  payload: task,
});
