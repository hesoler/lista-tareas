import React from "react";
import { TaskType } from "../d.types";
import { Button, Checkbox, Space } from "antd";
import useTaskStore from "../contexts/tasksStore";

const Task = ({ task }: { task: TaskType }) => {
  const { editTask, removeTask } = useTaskStore();

  const changeCompletedTask = () => {
    const edit = task;
    edit.completed = !task.completed;
    editTask(task.id, edit);
  };

  return (
    <>
      <div className="item-container">
        <div className="infoTask" >
          <Space size="middle">
            <Checkbox
              checked={task.completed}
              onChange={changeCompletedTask}
            ></Checkbox>
            <p>{task.id}</p>
            <p>{task.title}</p>
          </Space>
        </div>
        <div className="button-delete-flex-rigth">
          <Button onClick={() => removeTask(task.id)} type="primary" danger>
            -
          </Button>
        </div>
      </div>
    </>
  );
};

export default Task;
