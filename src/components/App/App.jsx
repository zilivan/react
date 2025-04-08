import React from 'react';
import Footer from '../Footer/Footer';
import NewTaskForm from '../New-Task-Form/New-Task-Form';
import TaskList from '../Task-List/Task-List';

import './App.css'




const App = () => {
    const Tasks = [
    
        {id: 1, mode : "completed", description : "Completed task",created: "2024-01-01"},
        {id: 2, mode : "editing", description : "Editing task",created: "2023-02-01" },
        {id: 3, mode : "", description : "Active task",created: "2025-03-01"},
        
        ];



return(
<div>
<section class="todoapp"> 
<NewTaskForm/>
<section class="main">
<TaskList Tasks = {Tasks}/>
<Footer/>
</section>
</section>
</div>
);
};
 export default App ;



