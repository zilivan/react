import React from 'react';
import TasksFilter from '../Tasks-Filter/Tasks-Filter';
import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer">
        <span className="todo-count">1 items left</span>
        <TasksFilter/>
        <button className="clear-completed">Clear completed</button>
      </footer>

    );
};
 export default Footer ;
