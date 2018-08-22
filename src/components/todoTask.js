import React, { Component } from 'react';

class ToDoTask extends Component {

// RENDERS A SINGLE TASK EACH TIME
  render(){
    return (
      <div className="task">
        <ul>
          <li style={{ textDecoration: this.props.todo.completed ? 'line-through' : 'none', color: 'grey'}}>
            <span onClick={() => this.props.onBtnClick(this.props.index)}>
              <i className="fa fa-check" aria-hidden="true"></i>
              {this.props.todo.completed}
              </span>
          {this.props.todo.value}
          <span className="delete" onClick={() => this.props.onDelClick(this.props.index)}><i className="fa fa-trash"></i></span>
          </li>
        </ul>
      </div>
    )
  }
}

export default ToDoTask;
