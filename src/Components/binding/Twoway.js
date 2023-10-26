import React,{useState} from 'react'

const TwoWay = () => {
    const [inputval,setInputval] = useState("")
    const inputHandler = (e)=>{
        setInputval(e.target.value)
    }
    const clickHandler = ()=>{
        setInputval("")
    }
  return (
    <div>
        <h1 onClick={clickHandler}>Click</h1>
        <input type='text' value={inputval} onChange={inputHandler}/>
    </div>
  )
}

export default TwoWay