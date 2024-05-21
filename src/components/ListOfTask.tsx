import React from "react";
import useTaskStore from "../contexts/tasksStore";
import Task from "./Task";
import { Card } from "antd";

export const ListOfTask = () => {
  const { tasks } = useTaskStore();

  return (
    <div className="list-container">
      <Card>
        {tasks.map((item, index) => (
          <div key={item.id}>
            <Task task={item} index={index} />
          </div>
        ))}
        {tasks.length == 0 && <p>No Tasks</p>}
      </Card>
    </div>
  );
};
