import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <h1 className="text-3x1 font-bold">List of Task</h1>
      <div className="flex-rigth">
        <Link to="/createTask">
          <Button type="primary">+ Add</Button>
        </Link>
      </div>
    </>
  );
};
