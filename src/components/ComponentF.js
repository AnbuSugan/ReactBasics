import React, { Component } from "react";
import { UserConsumer } from "../userContext.js";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(Username) => {
          return <div>Hello {Username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
