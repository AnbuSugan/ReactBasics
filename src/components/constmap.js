import React from "react";

function Constmap() {
  const name = ["Anbu", "Arasu", "Diana"];
  const nameList = name.map((wish) => <h2>{wish}</h2>);
  return <>{nameList}</>;
}

export default Constmap;
