import { Task } from "../../models/Task";

const TaskCard = (task: Task): JSX.Element => {
  return <div>{task.name}</div>;
};

export default TaskCard;
