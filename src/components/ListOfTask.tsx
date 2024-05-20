import React from "react";
import useTaskStore from "../contexts/tasksStore";
import Task from "./Task";
import { Card } from "antd";

export const ListOfTask = () => {
  const { tasks } = useTaskStore();
  return (
    <div className="list-container">
      <Card title="List of Tasks">
        {tasks.map((item) => (
          <div key={item.id}>
            <Task task={item}></Task>
          </div>
        ))}
      </Card>
    </div>
  );
};
