import React, { Component } from "react";

class ElementVariableifelse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIN: true,
    };
  }
  render() {
    let Me;
    if (this.state.isLoggedIN) {
      Me = <>Welcome</>;
    } else {
      Me = <>Hello</>;
    }
    return <>{Me}</>;
  }
}

export default ElementVariableifelse;
