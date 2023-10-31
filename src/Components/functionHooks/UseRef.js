import React,{useState,useRef} from 'react'

const UseRef = () => {
    const [name,setName] = useState(undefined)
    const nameRef = useRef("")
    const nameHandler = () => {
        // nameRef.current.value = 10
        // nameRef.current.style.display = "none"
        nameRef.current.focus()
    };
    console.log("render")
  return (
    <div>
      <h1>Input tag with ref</h1>
      <p>{name}</p>
      <input type="text" value={name} ref={nameRef}/>
      <button onClick={nameHandler}>Change Name</button>
    </div>
  )
}

export default UseRef
