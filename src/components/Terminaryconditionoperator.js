import React, { Component } from "react";

export class Terminaryconditionoperator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIN: true,
    };
  }
  render() {
    return this.state.isLoggedIN ? (
      <div>Welcome Vishwas</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default Terminaryconditionoperator;
