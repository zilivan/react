import React,{Component} from 'react';
import Footer from '../Footer/Footer';
import NewTaskForm from '../New-Task-Form/New-Task-Form';
import TaskList from '../Task-List/Task-List';

import './App.css'




export default class App extends Component {

  idItem = 10;
   

  state  = {
         Data:[
          this.craeteDataItem('text')
        ],
         filterKey: [{id: 1, type: "All", selected: true},
                      {id: 2,type: "Active", selected: false},
                      {id: 3,type: "Completed", selected: false},
         ]
         };


  
craeteDataItem(label){
        return {
            id: this.idItem ++,  
            description : label,
            created: new Date(), 
            done: false,
            edit: ""
        };
      };
      

addDataItem = (text) => {

       const newDataItem =  this.craeteDataItem(text);
         this.setState(({Data}) =>  {
          const newData = [...Data,newDataItem];

       return {
        Data : newData
       
           };
        });
      };



onFillterChainge = (select)  => {
    this.setState (({filterKey}) => {
    const olditemFilterKey= this.state.filterKey.filter((el) => el.id >= 0)
    let idx = olditemFilterKey.findIndex((el) => el.selected === true)
    olditemFilterKey[idx].selected = false;
    idx = olditemFilterKey.findIndex((el) => el.type === select)
    olditemFilterKey[idx].selected = true;
    
    return {
        filterKey : olditemFilterKey
    };
    });
    };
   

onDestroy = (id) => { 
   this.setState (({Data}) => {
    const idx = Data.findIndex((el) => el.id === id) 
    const newArrayData = [
    ...Data.slice(0,idx),
    ...Data.slice(idx + 1)
      ]
   
return {
    Data : newArrayData
};
});
};


onDoneClick = (id) => {
    this.setState (({Data}) => {
        const idx = Data.findIndex((el) => el.id === id) ;
  const oldIdData = Data[idx];
  const newIdData = {...oldIdData,done : ! oldIdData.done}
  const newArrayData = [
    ...Data.slice(0,idx),
    newIdData,
    ...Data.slice(idx + 1)
      ];
       
      return {
        Data : newArrayData
      };
    });
   };



onClear =() => {

   this.setState (({Data}) => {

        return{
            Data : []
        }
    })

     };



filterArray = () => {
     const id = this.state.filterKey.findIndex((el) => el.selected)
     const filterKeySelect = this.state.filterKey[id].type
     let dataFilter;

  if (filterKeySelect === "All") {  
    dataFilter = this.state.Data ;
 } 
 if (filterKeySelect === "Active") {
    dataFilter = this.state.Data.filter((el) => el.done === false) ;
    
 } 
  if (filterKeySelect === "Completed"){
    dataFilter = this.state.Data.filter((el) => el.done);
 };

   return dataFilter ;
}



render() {
  const  {filterKey} = this.state; 
  const countDoItem = this.state.Data.filter((el) => el.done).length;
  const toDoCounts = this.state.Data.length  - countDoItem;
  let dataFilter = this.filterArray();
 
return(
<div>
<section class="todoapp"> 
<NewTaskForm  addDataItem = {(text) => this.addDataItem(text)}  />
<section class="main">
<TaskList Tasks = {dataFilter}
onDestroy = {(id) => this.onDestroy(id)}
onDoneClick = {(id) => this.onDoneClick(id)}
/>
<Footer toDoCounts = {toDoCounts}
onSelectFilter = {(select) => this.onFillterChainge(select)} 
filterKey = {filterKey}
onClear = {() => this.onClear()} />
</section>
</section>
</div>
);
};
};



