import React, { Component } from "react";

export class Shortcircuitoperator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIN: true,
    };
  }
  render() {
    return this.state.isLoggedIn && <div>Welcome Viswas</div>;
  }
}

export default Shortcircuitoperator;
