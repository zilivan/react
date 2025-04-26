import React, { Component } from 'react';
import formatDistance from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import './Task.css';

export default class Task extends Component {
  static defaultProps = {
    onDestroy: () => {},
    onDoneClick: () => {},
    onEdit: () => {},
  };

  static propTypes = {
    onDestroy: PropTypes.func,
    onDoneClick: PropTypes.func,
    onEdit: PropTypes.func,
    description: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
  };

  render() {
    const { description, created, done } = this.props;

    const dateDistance = formatDistance(new Date(created), { includeSeconds: true });

    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={done}
          onClick={this.props.onDoneClick}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{dateDistance}</span>
        </label>
        <button className="icon icon-edit" onClick={this.props.onEdit}></button>
        <button className="icon icon-destroy" onClick={this.props.onDestroy}></button>
      </div>
    );
  }
}
