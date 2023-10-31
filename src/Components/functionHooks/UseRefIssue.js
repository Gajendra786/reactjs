import React, { useState } from "react";

const UseRefIssue = () => {
  const [name, setName] = useState(null);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  console.log("render")
  return (
    <div>
      <h1>Input tag without ref</h1>
      <p>{name}</p>
      <input type="text" onChange={nameHandler}/>
    </div>
  );
};

export default UseRefIssue;
