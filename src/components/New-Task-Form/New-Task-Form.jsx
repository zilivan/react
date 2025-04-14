import React,{Component} from 'react';
import './New-Task-Form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {

static defaultProps = {
    addDataItem : () => {}
       };
static  propTypes = {
  addDataItem: PropTypes.func
     };

state ={
   input: ""

};
onSubmit = (e) => {
e.preventDefault();
this.props.addDataItem(this.state.input);
this.setState( {
   input: ""
})

};

  onInputChange = (e)  => {
      this.setState( {
        input: e.target.value
      })
  } ;    

render()  {

    return (
 
    <header className="header">
        <h1>todos</h1>
        <form  onSubmit={this.onSubmit}>
        <input 
        className="new-todo"
         type = "text"
         onChange={this.onInputChange}
        placeholder="What needs to be done?"
         autofocus
         value={this.state.input}/>
        </form>
      </header>
   

      );
    };
};
 
