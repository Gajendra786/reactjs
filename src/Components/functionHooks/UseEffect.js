// import React, { useEffect,useState } from "react";

// const UseEffect = () => {
//     const [count,setCount] = useState(0)
//     const clickHandler = ()=>{
//         setCount(count+1)
//     }
//   useEffect(() => {
//     console.log("useEffect is calling");
//   });

//   return (<div>
//     <h1>{count}</h1>
//     <button onClick={clickHandler}>Click</button>
//     <p>useEffect mechanism</p>
//   </div>);
// };

// export default UseEffect;



//////---------------- using useEffect like componentDidMount--------------------

// import React, { useEffect,useState } from "react";

// const UseEffect = () => {
//     const [count,setCount] = useState(0)
//     const clickHandler = ()=>{
//         setCount(count+1)
//     }
//   useEffect(() => {
//     console.log("useEffect is calling");
//   },[]);

//   return (<div>
//     <h1>{count}</h1>
//     <button onClick={clickHandler}>Click</button>
//     <p>useEffect mechanism</p>
//   </div>);
// };

// export default UseEffect;


///------------- useEffect based different state------------------


// import React, { useEffect,useState } from "react";

// const UseEffect = () => {
//     const [count,setCount] = useState(0)
//     const [val,setVal] = useState(10)

//     const countHandler = ()=>{
//         setCount(count+1)
//     }

//     const valHandler = ()=>{
//         setVal(val+1)
//     }

//   useEffect(() => {
//     console.log("val is changing");
//   },[val]);

//   useEffect(() => {
//     console.log("count is changing");
//   },[count]);

//   return (<div>
//     <h1>{count}</h1>
//     <h1>{val}</h1>
//     <button onClick={countHandler}>Change Count</button>
//     <button onClick={valHandler}>Change Val</button>
//     <p>useEffect mechanism</p>
//   </div>);
// };

// export default UseEffect;


///////////----------------infinite loop---------------

// import React, { useEffect,useState } from "react";

// const UseEffect = () => {
//     const [count,setCount] = useState(0)

//     const countHandler = ()=>{
//         setCount(count+1)
//     }

//   useEffect(() => {
//     // setCount(count+1)
//     console.log("count is changing");
//   },[count]);

//   return (<div>
//     <h1>{count}</h1>
//     <button onClick={setCount}>Change Count</button>
//   </div>);
// };

// export default UseEffect;



////////////------------------useEffect with props-----------
import React, { useEffect,useState } from "react";

const UseEffect = ({count,val}) => {
  useEffect(() => {
    console.log("count is changing");
  },[val]);

  return (<div>
    <h1>{count}</h1>
  </div>);
};

export default UseEffect;