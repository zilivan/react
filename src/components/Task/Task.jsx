import React,{Component} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types'
import './Task.css'



export default class Task extends Component   {
  static defaultProps = {
    onDestroy:() => {},
    onDoneClick:() => {}
            };

  static  propTypes = {
    onDestroy:PropTypes.func,
    onDoneClick:PropTypes.func,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
     edit: PropTypes.string.isRequired
          };


  render() {

  const {id, description,created,done,edit} = this.props

    const dateDistance = formatDistanceToNow(new Date(created),
    {includeSeconds: true}) ;
    let className;
    (done) ? className = "completed": className = "";
    className +=  edit;

    return(
    <li key = {id} className = {className}
           >
       <div className="view">
    <input className="toggle" type="checkbox" onClick = {this.props.onDoneClick} />
    <label>
      <span className="description">{description}</span>
      <span className="created">{dateDistance}</span>
    </label>
    <button className="icon icon-edit" ></button>
    <button className="icon icon-destroy" onClick = {this.props.onDestroy}  ></button>
  </div>
  <input type="text" className="edit" value="Editing task"/>
  </li>
 

    );
};
};


