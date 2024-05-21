import React, { useState } from "react";
import useTaskStore from "../contexts/tasksStore";
import { Button, Flex, Form, Input } from "antd";
import { Link } from "react-router-dom";

const AddTask = () => {
  const { addTask } = useTaskStore();
  const [title, setTitle] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmit = () => {
    if (title.trim().length < 1) return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };
    addTask(newTask);
    setTitle('')
  };

  return (
    <>
      <Form onFinish={onSubmit} className="container">
        <Flex gap="10px">
          <Input
            placeholder="Enter the new Task"
            value={title}
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
