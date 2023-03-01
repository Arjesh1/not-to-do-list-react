import "./App.css";
import { Table } from "./components/Table";
import { Form } from "./components/Form";
import { useState } from "react";

const hrwk= 7*24

function App() {
  const [taskList, setTaskList] = useState([]);

  const hr = taskList.reduce((subttl, {hr}) => subttl + +hr, 0)

  const addTask = (data) => {
    if (hrwk < hr + +data.hr) {
      return alert ("Not Enough Time for this task")
    }



    setTaskList([...taskList, data]);
  };

  

  const taskSwitcher = (id, type) =>{
    const tempArr = taskList.map((item) => {
      if (item.id === id){
        item.type = type
      }

      return item

    })

    setTaskList(tempArr)
  }

  const handleOnDelete = id => {
    if(window.confirm("Are you sure you want to delete this?")){
    const tempArg = taskList.filter((item) => item.id != id)
  setTaskList(tempArg)
  }
  }

  return (
    <div class="wrapper"> 
      <div class="container">
        {/* <!-- title --> */}
        <div class="row">
          <div class="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        {/* <!-- form-area --> */}
        <Form addTask={addTask} />

        {/* <!-- list area --> */}
        <Table taskList={taskList} taskSwitcher={taskSwitcher} handleOnDelete = {handleOnDelete}/>

        {/* <!-- Total hrs area --> */}
        <div class="row fw-bold">
          <div class="col">
            The total hours allocated for this week is  

            <span id="totalHrs">{hr}</span> Hours
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;