import React, { useEffect,useState } from "react";

// import ListComponent from "./Components/List/ListComponent"
// import StateFull from "./Components/stateFull&less/StateFull"
// import Uncontrolled from "./Components/uncontrolled/Uncontrolled"
// import Controlled from "./Components/controlled/Controlled"
// import Oneway  from "./Components/binding/Oneway"
// import TwoWay  from "./Components/binding/Twoway"
// import ConstructorAndRender from "./Components/lifeCycleMethods/Contructor&Render"
// import ComponentDidMount from "./Components/lifeCycleMethods/ComponentDidMount"
// import ComponentDidUpdate from "./Components/lifeCycleMethods/ComponentDidUpdate"
// import ComponentDidUpdateParent from "./Components/lifeCycleMethods/ComponentDidUpdateParent"
// import ComponentWillUnmountParent from "./Components/lifeCycleMethods/ComponentWillUnmountParent"


// ----------------------------

// import UseState from "./Components/functionHooks/UseState"
// import UseEffect from "./Components/functionHooks/UseEffect"
// import UseRefIssue from "./Components/functionHooks/UseRefIssue"
// // import UseRef from "./Components/functionHooks/UseRef"

// import UseMemo from "./Components/functionHooks/UseMemo";
// import UseCallbackParent from "./Components/functionHooks/UseCallbackParent";
// import ComA from "./Components/functionHooks/UseContext/ComA";
// import UseContextA from "./Components/functionHooks/UseContext/UseContextA";


// ----------------------------------
// import TodoList from "./Components/todoList/TodoList";


// -----------------------------------------------
// import SimpleContainer from "./Components/mui/MuiStructure";
// import WeatherApp from "./Components/weatherApp/weatherApp";
import Counter from "./Components/redux_practice/Counter"

// function App() {
//   const [count,setCount] = useState(0)
//   const countHandler = ()=>{
//     setCount(count+1)
//   }
//   return (
//     <>
//     <UseEffect count={count} val={0}/>
//     <button onClick={countHandler}>Change Count</button>
//     </>
//   );
// }




const App = ()=>{
  return (
    <Counter />
  )
}

export default App;
