// import React, { Component } from "react";

// class Message extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: "Welcome Visitors",
//     };
//   }
//   changeMessage() {
//     this.setState({
//       message: "Thank for Choosing",
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.message}</h1>;
//         <button onClick={() => this.changeMessage()}>Submit</button>
//       </>
//     );
//   }
// }

// export default Message;

// Function Props

// import React from "react";

// const Message = (props) => {
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroname}
//       </h1>
//     </div>
//   );
// };

// export default Message;

// class Probs

// import React, { Component } from "react";

// export class Message extends Component {
//   render() {
//     return (
//       <div>
//         <h1>
//           {this.props.name} a.k.a {this.props.heroname}
//         </h1>
//       </div>
//     );
//   }
// }

// export default Message;

// import React, { Component } from "react";

// export class Message extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   increment() {
//     this.setState(
//         count = count + 1;

//     )

//     // console.log(this.state.count);
//   }

//   render() {
//     return (
//       <div>
//         <div>Count-{this.state.count}</div>
//         <button onClick={() => this.increment()}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Message;

import React, { Component } from "react";

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Message;
