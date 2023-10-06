import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome Visitors",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank for Choosing",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>;
        <button onClick={() => this.changeMessage()}>Submit</button>
      </>
    );
  }
}

export default State;
