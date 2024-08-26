import React from "react";
import { useState } from "react";
import { Component } from "react";

class App1 extends Component {
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

function App(){
  const [data, setState] = useState(false);
  /*const [confirmation, setState] = useState({ isConfirmed: false});
    const toggle = () => {
      confirmation.isConfirmed = true;
      setState({ isConfirmed: true });
      console.log(confirmation.isConfirmed);
    };
    const [confirmation] = useState({ confirmed: true });
    const toggle = () => setState(!data);*/
    //state is async
  const toggle = () => {
    const newData = !data;
    setState(newData);
    console.log(newData);
  };

  return (
    <main>
      <h1>Class component with State</h1>
      <p>{ data === true ? 'True' : 'False'}</p>
      {/*<p>{ confirmation.isConfirmed === true ? 'True' : 'False'}</p>*/}
      <button onClick={toggle}> Toggle </button>
    </main>
  );
}

export default App;
