import React from 'react';
import PropTypes from 'prop-types';

import ButtonFilter from '../Button-Filter/Button-Filter';
import './Tasks-Filter.css';

const TasksFilter = ({ onSelectFilter, filterKey }) => {
  TasksFilter.defaultProps = {
    filterKey: [],
  };

  TasksFilter.propTypes = {
    filterKey: PropTypes.arrayOf(PropTypes.object),
  };

  const TaskFill = filterKey.map((item) => {
    return (
      <li key={item.id}>
        <ButtonFilter {...item} onSelectFilter={(select) => onSelectFilter(select)} />
      </li>
    );
  });

  return <ul className="filters">{TaskFill}</ul>;
};
export default TasksFilter;
