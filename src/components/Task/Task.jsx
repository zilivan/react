import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './Task.css'

const Task = ({description, created }) =>
    
    {
      
      const dateDistance = formatDistanceToNow(new Date(created),
        {includeSeconds: true}) ;

    return(
    
       <div className="view">
    <input className="toggle" type="checkbox"/>
    <label>
      <span className="description">{description}</span>
      <span className="created">{dateDistance}</span>
    </label>
    <button className="icon icon-edit"></button>
    <button className="icon icon-destroy"></button>
  </div>

    );
};
 export default Task ;
