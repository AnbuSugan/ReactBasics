import React, { Component } from "react";

export class Bindmethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      Message: "Welcome",
    });
  }
  render() {
    return (
      <>
        <div>{this.state.Message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </>
    );
  }
}

export default Bindmethod;
