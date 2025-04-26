import React, { Component } from 'react';
//import './Edit-Task-Form.css'
import PropTypes from 'prop-types';

export default class EditTaskForm extends Component {
  static defaultProps = {
    editDataItem: () => {},
  };
  static propTypes = {
    editDataItem: PropTypes.func,
    description: PropTypes.string.isRequired,
  };

  state = {
    editInput: '',
  };
  onSubmit = (e) => {
    e.preventDefault();

    let text = this.state.editInput;

    if (text === '') {
      return;
    }
    this.props.editDataItem(text);
    this.setState({
      editInput: '',
    });
  };

  onInputChange = (e) => {
    this.setState({
      editInput: e.target.value,
    });
  };

  render() {
    const { description } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="edit"
          defaultValue={description}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}
