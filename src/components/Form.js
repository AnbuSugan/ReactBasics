import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handletopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    // alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);

    event.preventDefault();
  };

  render() {
    const { username, comment, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comment</label>

          <textarea value={comment} onChange={this.handleCommentChange} />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handletopicChange}>
            <option value="react">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
