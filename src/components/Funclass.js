import React from "react";

const Funclass = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroname}
      </h1>
    </div>
  );
};

export default Funclass;

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
