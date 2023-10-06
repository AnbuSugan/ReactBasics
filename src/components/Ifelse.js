import React, { Component } from "react";

class Ifelse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIN: true,
    };
  }

  render() {
    if (this.state.isLoggedIN) {
      return <div>Welcome</div>;
    } else {
      return <div>Hello</div>;
    }
  }
}

export default Ifelse;
