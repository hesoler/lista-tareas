import React from "react";
import "./style.css";
import "./output.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./components/RoutesComponent";

export const App = () => {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
};
