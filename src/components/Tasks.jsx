import React from "react";

import Checkbox from "./Checkbox";
import { useTasks } from "../hooks";

const Tasks = () => {
  // const { tasks } = useTasks("1");
  // console.log(tasks);
  const tasks = [];

  let projectName = "";

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="tasks__list">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <li key={task.id}>
              <Checkbox id={task.id} />
              <span>{task.task}</span>
            </li>
          ))
        ) : (
          <span>This is a Task</span>
        )}
      </ul>
    </div>
  );
};

export default Tasks;
