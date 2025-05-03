import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../Tasks-Filter/Tasks-Filter.jsx';
import './Footer.css';

const Footer = ({ toDoCounts, onSelectFilter, filterKey, onClear }) => {
  Footer.defaultProps = {
    onClear: () => {},
    onSelectFilter: () => {},
    filterKey: [],
    toDoCounts: 0,
  };

  Footer.propTypes = {
    onClear: PropTypes.func,
    onSelectFilter: PropTypes.func,
    filterKey: PropTypes.arrayOf(PropTypes.object),
    toDoCounts: PropTypes.number,
  };
  return (
    <footer className="footer">
      <span className="todo-count">{toDoCounts} items left</span>
      <TasksFilter onSelectFilter={(select) => onSelectFilter(select)} filterKey={filterKey} />
      <button className="clear-completed" onClick={onClear}>
        Clear completed
      </button>
    </footer>
  );
};
export default Footer;
