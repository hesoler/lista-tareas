import React from "react";
import { TaskType } from "../d.types";
import { Button, Checkbox, Space } from "antd";
import useTaskStore from "../contexts/tasksStore";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const Task = ({ task, index }: { task: TaskType, index: number }) => {
  const { editTask, removeTask } = useTaskStore();

  const changeCompletedTask = (event: CheckboxChangeEvent) => {
    const setCompleted = event.target.checked;
    const updatedTask = { ...task, completed: setCompleted }
    editTask(task.id, updatedTask);
  };

  return (
    <div className="item-container">
      <div className="infoTask" >
        <Space size="middle">
          <Checkbox
            checked={task.completed}
            onChange={changeCompletedTask} />
          <p>{index + 1}</p>
          <p>{task.title}</p>
        </Space>
      </div>
      <div className="button-delete-flex-rigth">
        <Button onClick={() => removeTask(task.id)} type="primary" danger>
          -
        </Button>
      </div>
    </div>
  );
};

export default Task;
