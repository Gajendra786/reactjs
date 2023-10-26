import React,{useState} from 'react'

const Controlled = () => {
    const [inputval,setInputval] = useState("")
    const inputHandler = (e)=>{
        setInputval(e.target.value)
    }
    const clickHandler = ()=>{
        console.log(inputval)
    }
  return (
    <div>
        <h1 onClick={clickHandler}>Click</h1>
        <input type='text' onChange={inputHandler}/>
    </div>
  )
}

export default Controlled