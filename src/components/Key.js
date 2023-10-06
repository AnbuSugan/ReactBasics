import React from "react";

function Key() {
  const names = ["Bruce", "clark", "Diana", "Bruce"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <>{nameList}</>;
}

export default Key;
