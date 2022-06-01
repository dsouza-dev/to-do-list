import React, { useEffect, useState } from "react";
import AddTask from "../AddTask";
import Tasks from "../Tasks";
import {v4 as uuidv4} from "uuid"
import axios from "axios";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      completed: false,
    },
    {
      id: 2,
      title: "Banho",
      completed: false,
    },
    {
      id: 3,
      title: "Academia",
      completed: true,
    },
  ]);

  useEffect(() => {
      const FetchTask = async () => {
        const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
        setTasks(data)
      };
      FetchTask();

    },[]);

  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map(task => {
          if (task.id === taskId) return {...task, completed: !task.completed}
          return task;
      });
      setTasks(newTasks)
  };

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [
          ...tasks, {
          title: taskTitle,
          id: uuidv4(),
          completed: false
      }
    ];
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId)

      setTasks(newTasks)
  }

  return (
          <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
          </>
  );
};

export default App;

