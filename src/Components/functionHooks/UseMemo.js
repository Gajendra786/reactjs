import React, { useState,useMemo } from "react";

function multiplierFun(num) {
    console.log("fun")
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const multiplier = useMemo(()=>{
    return multiplierFun(number)
  },[number])

  const styles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const numberHandler = (e)=>{
    setNumber(parseInt(e.target.value))
  }

  const darkHandler = ()=>{
    setDark(!dark)
  }

  return(
    <>
    <input type="number" value={number} onChange={numberHandler}/>
    <button onClick={darkHandler}>Change theme</button>
    <div style={styles}>{multiplier}</div>
    </>
  )
};

export default UseMemo;