import React, { useState } from 'react'
import "./index.css"
import Button from '../Button'

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
      setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
      handleTaskAddition(inputData)
      setInputData("")
  }

  return (
      <div className="addTask-container">
        <input onChange={handleInputChange} value={inputData}className="addTask-input" type="text" />
        <div className="addTask-button-container"><Button onClick={handleAddTaskClick}>Adicionar</Button></div>     
    </div>
  )
}

export default AddTask