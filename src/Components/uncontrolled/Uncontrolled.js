import React, { useRef } from "react";

const Uncontrolled = () => {
  let inputVal = useRef("")
  const clickHandler = (event)=>{
    console.log(inputVal.current,"1")
    let inputVal2 = document.getElementById('input')
    console.log(inputVal2,"2")
  }
  return (
    <>
    <h1 onClick={()=>clickHandler()}>Click</h1>
    <input type="text" id="input" ref={inputVal}/>
    </>
  );
};

export default Uncontrolled;
