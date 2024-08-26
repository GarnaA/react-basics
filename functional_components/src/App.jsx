import React from "react";
import { Component } from "react";

class App extends Component {
  //field to store reactive data
  state = { data: false };
  
  //regular class method to update state
  toggle = () => this.setState({ data: !this.state.data });

  //markup
  render(){
    const { data } = this.state;
    return (
      <main>
        <h1>Class component with State</h1>
        <p>{ data === true ? 'True' : 'False'}</p>
        <button onClick={this.toggle}> Toggle </button>
      </main>
    );
  }
}

export default App;
