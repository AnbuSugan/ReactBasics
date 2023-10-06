import React, { Component } from "react";

export class Cilickcounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>counter{count}times</button>
      </div>
    );
  }
}

export default Cilickcounter;
