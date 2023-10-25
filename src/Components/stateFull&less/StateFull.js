import React, { useState } from "react";

const StateFull = () => {
  const [val, setVal] = useState(0);
  const clickHandler = () => {
    setVal(val + 1);
  };
  return (
    <div>
     <h1>Hello</h1>
    </div>
  );
};

export default StateFull;
