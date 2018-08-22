import React, { Component } from 'react';

class InputBar extends Component {

// RENDERS THE INPUT BAR
  render(){
    return (
      <div className="inp">
        <h1> To Do List</h1>
        <form onSubmit={(event) => this.props.onInputSubmit(event)}>
          <input placeholder="Add To-Do here and press Enter.."
            onChange={(event) => this.props.onInputChange(event)}
            value={this.props.inpVal}
          />
        </form>
      </div>
    )
  }
}

export default InputBar;
