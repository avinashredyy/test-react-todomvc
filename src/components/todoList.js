import React, { Component } from 'react';
import ToDoTask from './todoTask';

class ToDoList extends Component {

// RENDERS ALL THE TASKS
  render(){
    return (
      <div className="list">
        {this.props.todos.map((todo, index) => {
          return(
            <ToDoTask
              key={index}
              index={index}
              onBtnClick = {this.props.onBtnClick}
              onDelClick = {this.props.onDelClick}
              todo={todo}
            />
          )
        })}
      </div>
    )
  }
}

export default ToDoList;
