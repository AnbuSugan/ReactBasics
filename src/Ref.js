import React, { Component } from "react";

export class Ref extends Component {
  constructor(props) {
    super(props);
    this.inputref = React.createRef();
    this.cbref = null;
    this.setcbref = (element) => {
      this.cbref = element;
    };
  }
  componentDidMount() {
    // this.inputref.current.focus();
    if (this.cbref) {
      this.cbref.focus();
    }
  }
  clickHandler = () => {
    alert(this.inputref.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputref} />
        <input type="text" ref={this.setcbref} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default Ref;
