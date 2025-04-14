import React,{Component} from 'react';
import Task from '../Task/Task';
import './Task-List.css'
import PropTypes from 'prop-types'


export default class TaskList  extends Component {
  
  static defaultProps = {
    Tasks : []
         };
  static  propTypes = {
    Tasks: PropTypes.arrayOf(PropTypes.object)
       };


  render() {  
     
   const {Tasks} = this.props;
   
    const TaskLists = Tasks.map((item)  => {
      const {id } = item;
    
       return(
       
     <Task {...item} 
     onDestroy = {() => this.props.onDestroy(id)}
     onDoneClick = {() => this.props.onDoneClick(id)} />
     );
      })
  
    return (
    
       <ul className="todo-list">
      {TaskLists}
      </ul>
    );
}
};
