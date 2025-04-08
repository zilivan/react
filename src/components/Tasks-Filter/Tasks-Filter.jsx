import React from 'react';
import './Tasks-Filter.css'
const TasksFilter = () => {
    return(
      
        <ul className="filters">
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
       

    );
};
 export default TasksFilter ;
