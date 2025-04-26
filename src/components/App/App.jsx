import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import NewTaskForm from '../New-Task-Form/New-Task-Form';
import TaskList from '../Task-List/Task-List';
import './App.css';

export default class App extends Component {
  idItem = 10;

  state = {
    Data: [this.craeteDataItem('text')],
    filterKey: [
      { id: 1, type: 'All', selected: true },
      { id: 2, type: 'Active', selected: false },
      { id: 3, type: 'Completed', selected: false },
    ],
  };

  craeteDataItem(label) {
    return {
      id: this.idItem++,
      description: label,
      created: new Date(),
      done: false,
      edit: false,
    };
  }

  addDataItem = (text) => {
    const newDataItem = this.craeteDataItem(text);
    this.setState(({ Data }) => {
      const newData = [...Data, newDataItem];

      return {
        Data: newData,
      };
    });
  };

  onFillterChainge = (select) => {
    this.setState(() => {
      const olditemFilterKey = this.state.filterKey.filter((el) => el.id >= 0);
      let idx = olditemFilterKey.findIndex((el) => el.selected === true);
      olditemFilterKey[idx].selected = false;
      idx = olditemFilterKey.findIndex((el) => el.type === select);
      olditemFilterKey[idx].selected = true;

      return {
        filterKey: olditemFilterKey,
      };
    });
  };

  onDestroy = (id) => {
    this.setState(({ Data }) => {
      const idx = Data.findIndex((el) => el.id === id);
      const newArrayData = [...Data.slice(0, idx), ...Data.slice(idx + 1)];

      return {
        Data: newArrayData,
      };
    });
  };

  onDoneClick = (id) => {
    this.setState(({ Data }) => {
      const idx = Data.findIndex((el) => el.id === id);
      const oldIdData = Data[idx];
      const newIdData = { ...oldIdData, done: !oldIdData.done };
      const newArrayData = [...Data.slice(0, idx), newIdData, ...Data.slice(idx + 1)];

      return {
        Data: newArrayData,
      };
    });
  };

  onClear = () => {
    this.setState(() => {
      const dataFilter = this.state.Data.filter((el) => el.done === false);

      return {
        Data: dataFilter,
      };
    });
  };

  filterArray = () => {
    const id = this.state.filterKey.findIndex((el) => el.selected);
    const filterKeySelect = this.state.filterKey[id].type;
    let dataFilter;

    if (filterKeySelect === 'All') {
      dataFilter = this.state.Data;
    }
    if (filterKeySelect === 'Active') {
      dataFilter = this.state.Data.filter((el) => el.done === false);
    }
    if (filterKeySelect === 'Completed') {
      dataFilter = this.state.Data.filter((el) => el.done);
    }

    return dataFilter;
  };

  onEdit = (id, typeEdit = true, text) => {
    this.setState(({ Data }) => {
      const idx = Data.findIndex((el) => el.id === id);
      const oldIdData = Data[idx];
      let label;
      typeEdit ? (label = oldIdData.description) : (label = text);
      if (oldIdData.done) {
        typeEdit = false;
      }

      const newIdData = { ...oldIdData, edit: typeEdit, description: label };
      const newArrayData = [...Data.slice(0, idx), newIdData, ...Data.slice(idx + 1)];

      return {
        Data: newArrayData,
      };
    });
  };

  editDataItem = (text, id) => {
    let typeEdit = false;
    this.onEdit(id, typeEdit, text);
  };

  render() {
    const { filterKey } = this.state;
    let dataFilter = this.filterArray();
    const countDoItem = this.state.Data.filter((el) => el.done).length;
    const toDoCounts = this.state.Data.length - countDoItem;

    return (
      <div>
        <section className="todoapp">
          <NewTaskForm addDataItem={(text) => this.addDataItem(text)} />
          <section className="main">
            <TaskList
              Tasks={dataFilter}
              onDestroy={(id) => this.onDestroy(id)}
              onDoneClick={(id) => this.onDoneClick(id)}
              onEdit={(id) => this.onEdit(id)}
              editDataItem={(text, id) => this.editDataItem(text, id)}
            />

            <Footer
              toDoCounts={toDoCounts}
              onSelectFilter={(select) => this.onFillterChainge(select)}
              filterKey={filterKey}
              onClear={() => this.onClear()}
            />
          </section>
        </section>
      </div>
    );
  }
}
