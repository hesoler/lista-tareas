import React, { useState } from "react";
import "./style.css";
import "./output.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createTask" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
