// import React from "react";
// import ReactDOM from "react-dom";

// import "./mystyle.scss";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import Mynewwebsite from "./App.js";
// import "./App.css";
// import styles from "./demo.module.css";

// 1.class created
// class Demo {
//   methodone() {
//     var a = 5;
//     var b = 10;
//     var c = a + b;
//     document.getElementById("root").innerHTML = c;
//   }
// }
// var mydemo = new Demo();
// mydemo.methodone();

// 2.Function

// var a = function () {
//   var a = 5;
//   var b = 10;
//   var c = a + b;
//   document.getElementById("root").innerHTML = c;
// };
// a();

// 3.AERO FUNCTION

// var a = () => {
//   var a = 5;
//   var b = 10;
//   var c = a + b;
//   document.getElementById("root").innerHTML = c;
// };
// a();

// 4.parameter passing

// var a = (x) => {
//   var a = 5;
//   var b = 10;
//   var c = a + b + x;
//   document.getElementById("root").innerHTML = c;
// };
// a(5);

// 5.variable creation

// var n = () => {
//   var a = 5;
//   if (a == 5) {
//     var a = 10;
//   }
//   document.getElementById("root").innerHTML = a;
// };
// n();

// let variable
// var n = () => {
//   var a = 5;
//   if (a == 5) {
//     let a = 10;
//     document.getElementById("root").innerHTML = a;
//   }
// };
// n();

// index.js
// const myele = React.createElement(h1, {}, "Hello World");
// ReactDOM.render(myele, document.getElementById("root"));
// const myele = React.createElement("h1", {}, "Hello World");
// ReactDOM.render(myele, document.getElementById("root"));

// with using JSX
// const myele = <h1>Hello World</h1>;
// ReactDOM.render(myele, document.getElementById("root"));

//style

// var mystyle = {
//   color: "blue",
//   textAlign: "center",
// };
// const myele = (
//   <div style={mystyle}>
//     <h1>welcome</h1>
//     <h2>hi</h2>
//     <p>how are you</p>
//   </div>
// );
// ReactDOM.render(myele, document.getElementById("root"));

// External css Importing css

// const my = (
//   <div>
//     <h1 classname="header">Welcome</h1>
//   </div>
// );
// ReactDOM.render(my, document.getElementById("root"));

// Function Component
// function Header() {
//   return <h1>Welcome</h1>;
// }
// ReactDOM.render(<Header />, document.getElementById("root"));

// Multitag Component
// function Header() {
//   return (
//     <div>
//       <h1>welcome to all</h1>
//       <p>with my Responsibilities</p>
//     </div>
//   );
// }
// ReactDOM.render(<Header />, document.getElementById("root"));

// Multiple Functions
// function Header() {
//   return (
//     <div>
//       <h1>Welcom</h1>
//       <h2>TO</h2>
//       <h4>All</h4>
//     </div>
//   );
// }
// function Nav() {
//   return (
//     <div>
//       <p>Warm</p>
//       <h1>Warm welcome</h1>
//     </div>
//   );
// }
// function Side() {
//   return (
//     <div>
//       <h1>What</h1>
//       <h2>is</h2>
//       <h1>this</h1>
//     </div>
//   );
// }
// function Myfunction() {
//   return (
//     <div>
//       <Header />
//       <Nav />
//       <side />
//     </div>
//   );
// }
// ReactDOM.render(<Myfunction />, document.getElementById("root"));

// class Mywebsite extends React.Component {
//   render() {
//     return (
//       <div>
//         <Mynewwebsite />
//         <h1>Warm</h1>
//         <h2>Welcome</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Mywebsite />, document.getElementById("root"));

//React Properties

// class Properties extends React.Component {
//   render() {
//     return <h1>Learn {this.props.topic}</h1>;
//   }
// }
// ReactDOM.render(
//   <Properties topic="Reactjs" />,
//   document.getElementById("root")
// );

//Multiple Properties
// class My extends React.Component {
//   render() {
//     return (
//       <h1>
//         welcome {this.props.topic} in
//         {this.props.what}
//       </h1>
//     );
//   }
// }
// ReactDOM.render(
//   <My topic="Anbarasu" what="Arasu" />,
//   document.getElementById("root")
// );

// class My extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>welcome {this.props.topic}</h1>
//         <h2>Warm welcome {this.props.what}</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <My topic="Anbarasu" what="Arasu" />,
//   document.getElementById("root")
// );

// class Parent extends React.Component {
//   render() {
//     return <h1>Learn react in {this.props.var}</h1>;
//   }
// }
// class Child extends React.Component {
//   render() {
//     const v = "english";
//     return <Parent var={v} />;
//   }
// }
// ReactDOM.render(<Child />, document.getElementById("root"));

// Properties Object
// class Myclass extends React.Component {
//   render() {
//     return (
//       <h1>
//         Learn {this.props.var.topic} in {this.props.var.language} in{" "}
//         {this.props.var.prop}
//       </h1>
//     );
//   }
// }
// class Myclass1 extends React.Component {
//   render() {
//     const v = { topic: "React", language: "English", prop: "Properties" };
//     return <Myclass var={v} />;
//   }
// }
// ReactDOM.render(<Myclass1 />, document.getElementById("root"));

// Default Value
// class Myclass extends React.Component {
//   render() {
//     return (
//       <h1>
//         Welcome to my {this.props.app} in {this.props.apps}
//       </h1>
//     );
//   }
// }
// Myclass.defaultProps = { app: "Home", apps: "Welcome" };
// ReactDOM.render(<Myclass />, document.getElementById("root"));

// State Function
// class Myclass extends React.Component {
//   constructor() {
//     super();
//     this.state = { initialvalue: "welcome", name: "Guys" };
//   }
//   changevalue = () => {
//     this.setState({ initialvalue: "Thanks for watching" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.initialvalue} {this.state.name}
//         </h1>
//         <button type="button" onclick={this.changevalue}>
//           Exit
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Myclass />, document.getElementById("root"));

// class Myclass extends React.Component {
//   constructor() {
//     super();
//     this.state = { initialvalue: "welcome", name: "Guys" };
//   }

//   changevalue = () => {
//     this.setState({ initialvalue: "Thanks for watching" });
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.initialvalue} {this.state.name}
//         </h1>
//         <button type="button" onClick={this.changevalue}>
//           Exit
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Myclass />, document.getElementById("root"));

// class Myclass extends React.Component {
//   constructor() {
//     super();
//     this.state = { initialvalue: "welcome", name: "Guys" };
//   }

//   changevalue = () => {
//     this.setState({ initialvalue: "Thanks for watching" });
//   };
//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.initialvalue}
//           {this.state.name}
//         </h1>
//         <br />
//         <button type="button" onClick={this.changevalue}>
//           Exit
//         </button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Myclass />, document.getElementById("root"));

// class Myclass extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       msg: "welcome",
//     };
//   }
//   clickevent = (a) => {
//     this.setState({
//       msg: a,
//     });
//   };

//   render() {
//     return (
//       <div>
//         {" "}
//         <h1>{this.state.msg}</h1>;
//         <button onMouseOver={this.clickevent.bind(this, "Hello World")}>
//           click
//         </button>
//         ;
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Myclass />, document.getElementById("root"));

// CSS STYLING.REACTJS

// class Myclass extends React.Component {
//   render() {
//     const mystyle = {
//       color: "blue",
//       fontFamily: "Arial",
//     };
//     return (
//       <div>
//         <h1 style={{ color: "brown", textAlign: "center" }}>
//           Welcome To World
//         </h1>
//         <h2 style={mystyle}>Hello World</h2>
//         <h3 className={styles.heading}>Hello Mr Welcome</h3>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Myclass />, document.getElementById("root"));

// SCSS

// class Myclass extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome To World</h1>
//         <h2>Hello World</h2>
//         <h3>Hello Mr Welcome</h3>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Myclass />, document.getElementById("root"));

// ReactForm using Formvalidation

// class Myclass extends React.Component
// {
//   constructor(){
//     super();
//     this.state={username:"",age:null,err:""}
//   }
//   uservalue = (event)=>
//   {
//     let n = event.target.name;
//     let v = event.target.value;
//     let err = "";
//     if(n=="age"){
//       if(v!=""&&!Number(v))
//       {
//         err = <strong>Invalid value,your age must be a number</strong>
//       }
//     }
//     this.setState({errmsg:err});
//     this.setState({[n]:v});
//   }
//   formsubmit=(event)=>
//   {
//   event.PreventDefault();
//   alert("your name"+this.state.username);
//   }
// }
// render() {
//   return(
//     <div>
//       <form onSubmit={this.formsubmit}>
// Enter your name:<input type="text" name="username" onchange={this.uservalue}/>
// Enter your age:<input type="text" name="age" onchange={this.uservalue}/> {this.state.errmsg}
// <input type="submit"/>
//       </form>
//     </div>
//   )
// }
// ReactDOM.render(<Myclass />,document.getElementById('root'));

// class Myclass extends React.Component {
//   constructor() {
//     super();
//     this.state = { username: "", age: null, errmsg: "" };
//   }

//   uservalue = (event) => {
//     let n = event.target.name;
//     let v = event.target.value;
//     let err = "";

//     if (n === "age") {
//       if (v !== "" && !Number(v)) {
//         err = <strong>Invalid value, your age must be a number</strong>;
//       }
//     }

//     this.setState({ errmsg: err });
//     this.setState({ [n]: v });
//   };

//   formsubmit = (event) => {
//     event.preventDefault();
//     alert("Your name: " + this.state.username);
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.formsubmit}>
//           Enter your name:{" "}
//           <input type="text" name="username" onChange={this.uservalue} />
//           Enter your age:{" "}
//           <input type="text" name="age" onChange={this.uservalue} />
//           {this.state.errmsg}
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default Myclass;

// Form Creation

// class Reactform extends React.Component {
//   constructor() {
//     super();
//     this.state = { username: "", age: null, errmsg: "" };
//   }
//   uservalue = (event) => {
//     let n = event.target.name;
//     let v = event.target.value;
//     let err = "";
//     if (n === "age") {
//       if (v !== "" && !Number(v)) {
//         err = <strong>Invalid Value,Your age must be a number</strong>;
//       }
//     }
//     this.setState({ errmsg: err });
//     this.setState({ [n]: v });
//   };
//   formsubmit = (event) => {
//     event.preventDefault();
//     alert("your name" + this.state.username);
//   };
//   render() {
//     return (
//       <form onSubmit={this.formsubmit}>
//         <h1>Your Name:{this.state.username}</h1>
//         <h1>Your Age:{this.state.age}</h1>
//         Enter Your Name :{" "}
//         <input type="text" name="username" onChange={this.uservalue} />
//         Enter Your Age :{" "}
//         <input type="text" name="age" onChange={this.uservalue} />{" "}
//         {this.state.errmsg}
//         <input type="submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<Reactform />, document.getElementById("root"));

// react fragmentation

// class Myclass extends React.Component {
//   render() {
//     return (
//       <table>
//         <tr>
//           <Myclass1 />
//         </tr>
//       </table>
//     );
//   }
// }
// class Myclass1 extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <td>Hi</td>
//         <td>Hello</td>
//       </React.Fragment>
//     );
//   }
// }
// ReactDOM.render(<Myclass />, document.getElementById("root"));

// React List Values
// const newlist = [1, 2, 3, 4, 5, "hii", "bii"];
// const r1 = newlist.map((listvalues) => {
//   return <li>{listvalues}</li>;
// });
// ReactDOM.render(<ul>{r1}</ul>, document.getElementById("root"));

// const newlist = [1, 2, 3, 4, 5, "hii", "bii"];
// const r1 = newlist.map((listvalues) => {
//   return <li>{listvalues}</li>;
// });
// ReactDOM.render(<ul>{r1}</ul>, document.getElementById("root"));

// const items = [
//   { id: 1, text: "Item 1" },
//   { id: 2, text: "Item 2" },
//   { id: 3, text: "Item 3" },
// ];

// const itemList = items.map((item) => <div key={item.id}>{item.text}</div>);

// ReactDOM.render(itemList, document.getElementById("root"));

// function Menubar(props) {
//   const content = props.data.map((show) => (
//     <div key={show.id}>
//       <h3>
//         {show.id}:{show.title}:{show.content}
//       </h3>
//     </div>
//   ));

//   return <div>{content}</div>;
// }

// const myvalue = [
//   { id: 1, title: "First", content: "welcome to all" },
//   { id: 2, title: "Second", content: "To my Friends" },
// ];
// ReactDOM.render(<Menubar data={myvalue} />, document.getElementById("root"));

// Array Function Key Word

// function Listkey(props) {
//   const item = props.item;
//   const key = props.keys;
//   return (
//     <li>
//       {key} {item}
//     </li>
//   );
// }
// function Mylist(props) {
//   const listItem = props.myvalue.map((listvalue) => (
//     <Listkey keys={listvalue} item={listvalue} />
//   ));
//   return (
//     <div>
//       <h2>correct key usage example</h2>
//       <ul>{listItem}</ul>
//     </div>
//   );
// }
// const mydata = [2000, 3000, 4000, 5000];
// ReactDOM.render(<Mylist myvalue={mydata} />, document.getElementById("root"));

// React Hooks
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// function ReactHooks() {
//   const [count, updatecount] = useState(0);
//   return (
//     <div>
//       <p>You clicked the above button {count} times</p>
//       <button onClick={() => updatecount(count + 1)}>click me</button>
//     </div>
//   );
// }
// ReactDOM.render(<ReactHooks />, document.getElementById("root"));

// React Hooks
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// function ReactHooks() {
//   const [count, updatecount] = useState(0);
//   useEffect(() => {
//     alert("hello world");
//   });
//   return (
//     <div>
//       <p>You clicked the above button {count} times</p>
//       <button onClick={() => updatecount(count + 1)}>click me</button>
//     </div>
//   );
// }
// ReactDOM.render(<ReactHooks />, document.getElementById("root"));

// Routerlink
// import React from "react";
// import ReactDOM from "react-dom";
// import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom'
// import Home from './Home';
// import About from './About';
// import Joinus from './Joinus';
// import Notfound from './Notfound';

// const routing = (
//     <Router>
//         <div>
//             <h1>React Router Example</h1>

//         <ul>
//             <li><NavLink to ="/" exact activestyle={{color:"red"}}>Home<NavLink> </li>
//             <li><NavLink to ="/a" exact activestyle={{color:"red"}}>About<NavLink> </li>
//             <li><NavLink to ="/j" exact activestyle={{color:"red"}}>Join<NavLink> </li>
//         </ul>
//         <switch>
//         <Route exact path ="/" component={Home}/>
//         <Route path="/a" component={About}/>
//         <Route path="/j" component={Join}/>
//         <Route component={Notfound}/>
//         </switch>

//         </div>
//      <Router/>
// )
// ReactDOM.render(routing,document.getElementById('root'));

// import React from "react";
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   NavLink,
//   Switch,
// } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Joinus from "./Joinus";
// import Notfound from "./Notfound";

// const routing = (
//   <Router>
//     <div>
//       <h1>React Router Example</h1>

//       <ul>
//         <li>
//           <NavLink to="/" exact activeStyle={{ color: "red" }}>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/a" exact activeStyle={{ color: "red" }}>
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/j" exact activeStyle={{ color: "red" }}>
//             Join
//           </NavLink>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/a" component={About} />
//         <Route path="/j" component={Joinus} />
//         <Route component={Notfound} />
//       </Switch>
//     </div>
//   </Router>
// );

// ReactDOM.render(routing, document.getElementById("root"));

// LOGIN FORM

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// const root = document.getElementById("root");
// const modalRoot = document.getElementById("modal-root");

// class Modal extends React.Component {
//   render() {
//     return ReactDOM.createPortal(
//       <div
//         style={{
//           position: "absolute",
//           top: "0",
//           bottom: "0",
//           left: "0",
//           right: "0",
//           display: "grid",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "rgba(0,0,0,0.3)",
//         }}
//         onClick={this.props.onClose}
//       >
//         <div
//           style={{
//             padding: 20,
//             background: "#fff",
//             borderRadius: "2px",
//             display: "inline-block",
//             minHeight: "300px",
//             margin: "1rem",
//             position: "relative",
//             minWidth: "300px",
//             boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
//             justifySelf: "center",
//           }}
//         >
//           {this.props.children}
//           <hr />
//           <button onClick={this.props.onClose}>Close</button>
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

// class App extends React.Component {
//   state = { showModal: false };
//   handleShowMessageClick = () => this.setState({ showModal: true });
//   handleCloseModal = () => this.setState({ showModal: false });
//   render() {
//     return (
//       <div
//         style={{
//           height: "100%",
//           display: "grid",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: 400,
//             position: "relative",
//           }}
//         >
//           <h1>My App</h1>
//           <p>
//             This is an example of how you might use React.createPortal. I think
//             it is a pretty neat API that is yet another awesome escape hatch
//             that React provides for practical reasons. Sometimes you just need
//             to render something completely outside the React Tree.
//           </p>
//           <button onClick={this.handleShowMessageClick}>
//             Show Secret Modal
//           </button>
//           {this.state.showModal ? (
//             <Modal onClose={this.handleCloseModal}>
//               This is the secret modal message!
//             </Modal>
//           ) : null}
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, root);
