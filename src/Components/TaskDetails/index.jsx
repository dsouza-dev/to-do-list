import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button"
import "./index.css"


const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
      navigate('/')
  }
  
  return (
      <>
      <div className="back-btn-details"><Button onClick={handleBackButtonClick}>Voltar</Button></div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      </>
  )
};

export default TaskDetails;
