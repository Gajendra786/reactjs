import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)
    const clickHandler = ()=>{
        setCount(count+1)
    }
  return (
    <>
    <div>{count}</div>
    <button onClick={clickHandler}>Change the value</button>
    </>
  )
}

export default UseState