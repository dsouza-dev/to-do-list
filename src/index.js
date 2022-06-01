import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./Components/Layout/Container";
import TaskDetails from "./Components/TaskDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/:taskTitle" element={<TaskDetails />}></Route>
      </Routes>
    </Router>
  </Container>
);
