import React, { useRef } from 'react'

const Uncontrolled = () => {
    let val = useRef("")
    const clickHandler = ()=>{
        console.log(val.current.value)
        // let val2 = document.ge
    }
  return (
   <div>
    <input ref={val} type='text'/>
    <button onClick={clickHandler}>Click</button>
   </div>
  )
}

export default Uncontrolled