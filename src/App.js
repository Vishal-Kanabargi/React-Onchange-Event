import React, { useState } from "react";
import "./App.css";


function App() {
  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')

  const nameHandler = (e) =>{
    e.preventDefault()
    setName(e.target.value)
  }
  const salaryHandler = (e) => {
    e.preventDefault()
    setSalary(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log("state--->", name, salary)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Form Data</h2>
        <form onSubmit = {onSubmitHandler}>
         <div>
          <span>Name :</span>
          <input type= 'text' value = {name} onChange = {nameHandler}></input>
         </div>
         <div>
          <span>Salary :</span>
          <select value = {salary} onChange = {salaryHandler}> 
            <option value= 'high'>High</option>
            <option value= 'mid'>Mid</option>
            <option value= 'low'>Low</option>
          </select>
         </div>
         <button type= 'submit' value= 'submit'>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;