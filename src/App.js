import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
import Lifecycle from "./components/Lifecyclemethode";
import State from "./components/State";
import Counter from "./components/Counter";
import Funclass from "./components/Funclass";
import Bindmethod from "./components/Bindmethod";
import Ifelse from "./components/Ifelse";
import ElementVariableifelse from "./components/ElementVariableifelse";
import Terminaryconditionoperator from "./components/Terminaryconditionoperator";
import Map from "./components/Map";
import Constmap from "./components/constmap";
import Listmap from "./components/Listmap";
import Form from "./components/Form";
import ParentComp from "./Parentcomp";
import Ref from "./Ref";
import Focusinput from "./Focusinput";
import FRParentinput from "./components/FRParentinput";
import Portaldemo from "./components/Portaldemo";
import Hero from "./Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import Clickcounter from "./components/Clickcounter";
import Hover from "./components/Hover";

import Sighnup from "./Signup";
import { Button } from "bootstrap";
import Message from "./components/Message";
import Parentcomponent from "./components/Parentcomponent";
import Count from "./components/Count";
import Cilickcounter from "./Cilickcounter";
import HoverTwo from "./components/HoverTwo.js";
import Import from "./Import";
import ComponentC from "./components/ComponentC.js";

import { UserProvider } from "./userContext.js";
import Fetch from "./components/Fetch";
import Post from "./Post";

function App() {
  return (
    <div>
      {/* <Lifecycle /> 


  <State />


   <Sighnup /> 


   <Message /> 


   <Counter /> 


   <Funclass name="Anbu" heroname="arasu" /> 

  <Bindmethod /> 

   <Ifelse /> 


   <ElementVariableifelse /> 

   <Terminaryconditionoperator /> 

   <Map /> 


   <Constmap /> 


  <Listmap /> 


   <Form /> 


   <ParentComp />


  <Ref /> 
   <Focusinput /> 

  <FRParentinput /> 


   <Portaldemo /> 


  /<ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>  */}
      {/* <Clickcounter />
      <Hover /> */}
      {/* <Count /> */}
      {/* <Cilickcounter />
      <HoverTwo /> */}
      {/* <Import
        render={(count, increment) => (
          <Cilickcounter count={count} increment={increment} />
        )}
      />
      <Import
        render={(count, increment) => (
          <HoverTwo count={count} increment={increment} /> */}
      {/* <UserProvider value="Anbarasu">
        <ComponentC />
      </UserProvider> */}
      {/* <Fetch /> */}
      <Post />
    </div>
  );
}

export default App;
