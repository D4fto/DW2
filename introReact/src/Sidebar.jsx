import { useState, useEffect } from "react";
import { NoTasks } from "./NoTasks.jsx";
import { Tasks } from "./Tasks.jsx";
import { NewTaskForms } from "./NewTaskForms.jsx";

function verifyData(data, actualDate){
    const year = String(actualDate.getFullYear());
    const month = String(actualDate.getMonth());
    const day = String(actualDate.getDate());
  
    if (!data[year]) return false;
    if (!data[year][month]) return false;
    if (!data[year][month][day]) return false;

    return true
}
  

export function Sidebar(props){
    let actualDate = props.actualDate
    let data = props.data
    const [addingNewTask, setAddingNewTask] = useState(()=>{false})
    const [hasTasks, setHasTasks] = useState(()=>{verifyData(data, actualDate)})
    useEffect(()=>{
        setHasTasks(()=>verifyData(data, actualDate))
        setAddingNewTask(false)
    },[data, actualDate])
    return <>
    <div className="min-w-md max-w-md w-md bg-white dark:bg-gray-800 text-gray-400 border border-gray-700 flex flex-col">
        <h1 className="py-3 text-center font-bold text-xl">{`${actualDate.toLocaleDateString('pt-BR', {weekday: 'short'})} ${String(actualDate.getDate()).padStart(2,"0")}-${String(actualDate.getMonth()+1).padStart(2,"0")}-${actualDate.getFullYear()}`}</h1>
        {addingNewTask ? (
        <NewTaskForms {...props} />
        ) : hasTasks ? (
        <Tasks {...props} setAddingNewTask={setAddingNewTask}  />
        ) : (
        <NoTasks setAddingNewTask={setAddingNewTask} />
        )}
    </div>
    </>
}