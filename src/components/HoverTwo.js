import React, { Component } from "react";

export class HoverTwo extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onMouseOver={increment}>Hover {count} times</button>
      </div>
    );
  }
}

export default HoverTwo;
