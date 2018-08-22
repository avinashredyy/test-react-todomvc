import React, { Component } from 'react';
import './styles/App.css';
import InputBar from './components/input_bar';
import ToDoList from './components/todoList';

class App extends Component {
  state = {
    inpVal: '',
    todos: [],
  }

// RECORDS THE INPUT
  onInputChange = (event) => {
    //console.log(event.target.value);
    this.setState({inpVal: event.target.value});
  }

// TOGGLES THE COMPLETE/INCOMPLETE TASK FEATURE
  onBtnClick = (index) => {
    //console.log('clicked');
    const todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({todos: todos});
  }

// REMOVES THE TASK FROM THE LIST
  onDelClick = (index) => {
    //console.log(' Delete clicked');
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos: todos});
  }

// ADDS TASKS
  onInputSubmit = (event) => {
    event.preventDefault();
    //console.log('event fired');
    const inp = this.state.inpVal;
    if(inp.length>0){
    const newTodo = {
      value: this.state.inpVal,
      completed: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos, inpVal: '' })
    }
    else {
      alert("Cannot add empty to-do");
    }
  }

// RENDERS THE COMPONENTS
  render() {
    return (
      <div id="container">
        <InputBar
          onInputSubmit = {this.onInputSubmit}
          onInputChange = {this.onInputChange}
          inpVal={this.state.inpVal}
        />
        <ToDoList
          onBtnClick = {this.onBtnClick}
          onDelClick = {this.onDelClick}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
