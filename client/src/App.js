import React, { Component } from "react";
import TimeForm from "./components/TimeForm";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to TimeKeeper!</h1>
        <TimeForm></TimeForm>
      </div>
    );
  }
}

export default App;
