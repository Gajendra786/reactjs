import React, { useState, useCallback } from "react";
import UseCallbackChild from "./UseCallbackChild";

const UseCallbackParent = () => {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount(count + 1);
  };
  const testCallback = useCallback(() => {}, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={countHandler}>Click</button>
      <UseCallbackChild testCallback={testCallback} />
    </>
  );
};

export default UseCallbackParent;
