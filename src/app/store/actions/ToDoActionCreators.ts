import { TaskToDo } from "../../../features/ToDo/models/TaskToDo";
import { addTaskToDoAction } from "../../../features/types/Actions";

export const addTaskToDoActionCreator = (
  task: TaskToDo
): addTaskToDoAction => ({
  type: "addToDoTask",
  payload: task,
});
