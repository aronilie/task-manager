import { TaskToDo } from "../../models/TaskToDo";

const Task = (task: TaskToDo): JSX.Element => {
  return <div>{task.name}</div>;
};

export default Task;
