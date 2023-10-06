import React, { Component } from "react";

export class Inputref extends Component {
  constructor(props) {
    super(props);
    this.inputref = React.createRef();
  }
  focusInput() {
    this.inputref.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputref} />;
  }
}

export default Inputref;
