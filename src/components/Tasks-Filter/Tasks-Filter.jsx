import React from 'react';
import ButtonFilter from '../Button-Filter/Button-Filter';
import PropTypes from 'prop-types';
import './Tasks-Filter.css'


 const TasksFilter =    ({onSelectFilter, filterKey})     =>   {
    
  TasksFilter.defaultProps = {
    filterKey: []
      };

  TasksFilter.propTypes ={
    filterKey:PropTypes.arrayOf(PropTypes.object)
  
       }



   const TaskFill = filterKey.map((item)  => {

    return(

    <ButtonFilter 
    
    {...item} 
    onSelectFilter = {(select) =>  onSelectFilter(select)}/>
     );
     
      })


    return(
      
        <ul className="filters">
         {TaskFill}
        </ul>
       

    );
};
export default TasksFilter ;

