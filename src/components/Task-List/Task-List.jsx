import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';
import EditTaskForm from '../Edit-Task-Form/Edit-Task-Form';

import './Task-List.css';

export default class TaskList extends Component {
  static defaultProps = {
    Tasks: [],
  };
  static propTypes = {
    Tasks: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { Tasks } = this.props;

    const TaskLists = Tasks.map((item) => {
      const { id, edit, done, description, created } = item;

      let className;

      done ? (className = 'completed') : (className = '');

      edit && !done ? (className = 'editing') : (className = '');

      return (
        <li key={id} className={className}>
          <Task
            done={done}
            description={description}
            created={created}
            onDestroy={() => this.props.onDestroy(id)}
            onDoneClick={() => this.props.onDoneClick(id)}
            onEdit={() => this.props.onEdit(id)}
          />

          <EditTaskForm
            description={description}
            editDataItem={(text) => this.props.editDataItem(text, id)}
          />
        </li>
      );
    });

    return <ul className="todo-list">{TaskLists}</ul>;
  }
}
