import React, { Component } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onMouseOver={this.increment}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default Count;
