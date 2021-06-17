import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class ClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello There World'
    };
  };

  render() {
    const { string } = this.state;
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {string}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button 
        onClick={() => this.setState({ string: 'Thanks for clicking' })}
      >
        Change Text
      </button>
    </div>
    )
  };
};

export default ClassComponent;