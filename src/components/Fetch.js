import React, { Component } from "react";
import axios from "axios";

export class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Posts: [],
      errormsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ Posts: response.data });
      })
      .catch((error) => {
        this.setState({ errorMsg: "Error retreiving data" });
      });
  }
  render() {
    const { Posts, errorMsg } = this.state;
    return (
      <div>
        List of Posts
        {Posts.length
          ? Posts.map((Post) => <div key={Post.id}>{Post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default Fetch;
