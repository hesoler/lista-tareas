import React, { useState } from "react";
import useTaskStore from "../contexts/tasksStore";
import { Button, Flex, Form, Input } from "antd";
import { Link } from "react-router-dom";

const AddTask = () => {
  const { tasks, addTask } = useTaskStore();
  const [newTask, setNewTask] = useState({
    id: tasks.length + 1,
    title: "",
  });

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, title: e.target.value });
  };

  const onSubmit = () => {
    addTask(newTask);
    setNewTask({
      id: crypto.randomUUID(),
      title: "",
    });
  };
  return (
    <>
      <Form onFinish={onSubmit} className="container">
        <Flex gap="10px">
          <Input
            placeholder="Enter the new Task"
            value={newTask.title}
            onChange={handleInputChange}
          />
          <Button type="primary" htmlType="submit">
            Add Task
          </Button>
        </Flex>
      </Form>

      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </>
  );
};

export default AddTask;
