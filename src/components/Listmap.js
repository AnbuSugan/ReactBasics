import React from "react";
import Person from "./person";

function Listmap() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "react",
    },
    {
      id: 2,
      name: "Lucky",
      age: 45,
      skill: "reactjS",
    },
  ];
  const persionList = persons.map((persion) => <Person persion={persion} />);
  return <div>{persionList}</div>;
}

export default Listmap;
