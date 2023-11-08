import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    incrementByAmount,
  } from "../../features/counter/counterSlice";

const Counter = () => {
    const count = useSelector((counter) => counter.value);
    console.log(count)
    const dispatch = useDispatch();
  
    return (
      <div>
       <div>
          <button onClick={() => dispatch(increment(1))}>Increment</button>
          <span>{count}</span>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <div>
          <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
        </div>
      </div>
    );
}

export default Counter