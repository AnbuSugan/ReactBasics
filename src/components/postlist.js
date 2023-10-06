import axios from "axios";
import { error } from "console";
import React, { Component } from "react";

export class postlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        List of post
        {post.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
      </div>
    );
  }
}

export default postlist;
