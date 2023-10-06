import React, { Component } from "react";
import Inputref from "./inputref";

export class Focusinput extends Component {
  constructor(props) {
    super(props);
    this.componentref = React.createRef();
  }
  clickHandler = () => {
    this.componentref.current.focusInput();
  };

  render() {
    return (
      <div>
        <Inputref ref={this.componentref} />
        <button onClick={this.clickHandler}>FocusInput</button>
      </div>
    );
  }
}

export default Focusinput;
