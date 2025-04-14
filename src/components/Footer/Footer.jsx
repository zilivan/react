import React from 'react';
import TasksFilter from '../Tasks-Filter/Tasks-Filter';
import PropTypes from 'prop-types'
import './Footer.css'

const Footer = ({toDoCounts , onSelectFilter, filterKey, onClear }) => {

  Footer.defaultProps = {
    onClear:() => {},
    toDoCounts: 0
      };

  Footer.propTypes ={
    onClear:PropTypes.func,
    toDoCounts: PropTypes.number
       }
      

    return(
        <footer className="footer">
        <span className="todo-count">{toDoCounts} items left</span>
        <TasksFilter 
        onSelectFilter = { (select) => onSelectFilter(select)}
        filterKey = {filterKey}
        />
        <button className="clear-completed" onClick = {onClear}>Clear completed</button>
      </footer>

    );
};
 export default Footer ;
