import React from "react";
import "./index.css";
import {CgClose, CgInfo} from "react-icons/cg"
import { useNavigate } from 'react-router-dom';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`)
  }

  return (
    <div className="task-container" style={task.completed ? { borderLeft: "6px solid greenyellow"} : {}}>
    
    <div className="task-title" onClick={() => handleTaskClick(task.id)}>{task.title}</div>


    <div className="buttons-container">
        <button className="edit-task" onClick={handleTaskDetailsClick}><CgInfo /></button>
        <button onClick={() => handleTaskDeletion(task.id)} className="remove-task"><CgClose /></button>
    </div>
    
    </div>
  )
} 
export default Task;
