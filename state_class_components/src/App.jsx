import './App.css';
import React from "react";

//creating class components
class Greeting extends React.Component {
  //props in constructor
  constructor(props) {
    super(props)
    this.state = {
      name: props.initialName
    }
  }

  clickHandler = () => {
    this.setState({
      name: "despicable me"
    })
    console.log(this.state);
    if(this.state.name === "despicable me") {
      this.props.onHide();
    }
  }

  render() {
    const { initialName } = this.props;
    return (
      <h1 className="greeting">
        Hello <i className="emphasize" onClick={this.clickHandler}>
          {this.state.name}</i>, Welcome!
      </h1>
    );
  }
}

class App extends React.Component {
  /*constructor(){
    super()
    this.state = {
      show: true
    }
  }*/
  
  state = {
    show: true
  }
  render() {
    return <main>
      <button onClick={() => {
        this.setState((prev) => ({show: !prev.show}));
      }}>toggle visibility</button>
      {this.state.show ? <Greeting initialName="Everyone" onHide={() => {
        this.setState({
          show: false
        })
      }}></Greeting> : null}
    </main>
  }
}

export default App;
