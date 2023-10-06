// import React, { Component } from "react";
// import Childcomponent from "./Childcomponent";

// class Parentcomponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       ParentName: "Parent",
//     };
//     this.greetparent = this.greetparent.bind(this);
//   }
//   greetparent(childName) {
//     alert(`Hello ${this.state.ParentName} from ${childName}`);
//   }

//   render() {
//     return (
//       <div>
//         <Childcomponent greetHandler={this.greetparent} />
//       </div>
//     );
//   }
// }

// export default Parentcomponent;

import React, { Component } from "react";
import Childcomponent from "./Childcomponent";

export class Parentcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ParentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`Hello ${this.state.ParentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <Childcomponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default Parentcomponent;
