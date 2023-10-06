import React from "react";

function Map() {
  const name = ["Bruce", "clark", "Diana"];
  return (
    <>
      {name.map((name) => (
        <h2>{name}</h2>
      ))}
    </>
  );
}

export default Map;
