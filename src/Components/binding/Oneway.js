import React,{useState} from 'react'

const OneWay = () => {
    const [inputval,setInputval] = useState("")
    const inputHandler = (e)=>{
        setInputval(e.target.value)
    }
    const clickHandler = ()=>{
        console.log(inputval)
        setInputval("")
    }
  return (
    <div>
        <h1 onClick={clickHandler}>Click</h1>
        <input type='text' onChange={inputHandler}/>
    </div>
  )
}

export default OneWay