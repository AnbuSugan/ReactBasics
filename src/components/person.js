import React from "react";

function Person({ persion }) {
  return (
    <div>
      <h2>
        i am {persion.name} i am {persion.age} yearsold i know {persion.skill}
      </h2>
    </div>
  );
}

export default Person;
