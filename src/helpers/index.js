import { collatedTasks } from "../constants";

const collectedTasksExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);

export { collectedTasksExist };
