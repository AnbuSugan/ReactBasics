import React from "react";

class Sighnup extends React.Component {
  constructor() {
    super();
    this.state = { username: "", number: "null", errmsg: "" };
  }
  uservalue = (event) => {
    let n = event.target.name;
    let v = event.target.value;
    let err = "";
    if (n == "number") {
      if (v !== "" && !Number(v)) {
        err = <strong>Invalid value,Enter the number</strong>;
      }
    }

    this.setState({ errmsg: err });
    this.setState({ [n]: v });
  };
  render() {
    return (
      <form className="form-group">
        <h1 className=" display-5  text-primary text-center">Welcome</h1>{" "}
        {this.state.username}
        <div class="formname">
          <label for="username" className="align-item-start">
            Username:
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Your name"
            className="w-50 "
            onChange={this.uservalue}
            name="username"
            required
          />
          <br />
          <label for="phone number">Phone number:</label>
          {this.state.errmsg}
          <br />
          <input
            type="text"
            placeholder="Enter Your number"
            onChange={this.uservalue}
            className="w-50"
            name="number"
            required
          />
          <br />
          <label for="password">Password:</label>
          <br />
          <input
            type="text"
            placeholder="Enter Your Password"
            className="w-50"
            name="pwd"
            required
          />
          <br />
          <label>
            <input type="checkbox" required />I agree the terms and conditions
          </label>

          <br />
          <button type="submit" className="mt-3 ms-2 ">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default Sighnup;
