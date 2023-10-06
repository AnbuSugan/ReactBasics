import React, { Component } from "react";

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = { value: "welcome", name: "Guys" };
  }

  componentWillMount() {
    alert("Learn ReactJS lifecycle");
  }

  changevalue = () => {
    this.setState({ value: "Learn react in tamil" });
  };
  deleteheader = () => {
    this.setState({ value: false, name: false });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: "Thank you" });
    }, 5000);
  }
  componentWillUpdate() {
    alert("Do you want update a new value");
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "NEW VALUE UPDATED SUCCESFULLY" + this.state.value;
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUnmount() {
    alert("Header Deleted");
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.value} {this.state.name}{" "}
        </h1>{" "}
        <br />
        <button type="button" onClick={this.changevalue}>
          Change value
        </button>
        <button type="button" onClick={this.deleteheader}>
          Delete Header
        </button>
      </div>
    );
  }
}
export default Lifecycle;
