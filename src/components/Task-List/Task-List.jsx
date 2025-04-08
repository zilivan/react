import React from 'react';
import Task from '../Task/Task';
import './Task-List.css'

const TaskList = ({Tasks}) => {
  


  const TaskLists = Tasks.map((item)  => {
      
        const {mode,id, ...itemsProp } = item;
        

        
   return(
    <li key = {id} className = {mode}>
    <Task {...itemsProp}/>
   { (mode === "editing") &&  <input type="text" className="edit" value="Editing task"/>}
    </li>
   );
  });


    return (
    
       <ul className="todo-list">
      {TaskLists}
      </ul>
    );
};
 export default TaskList  ;