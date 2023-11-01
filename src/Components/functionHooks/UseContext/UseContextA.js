import React, { createContext } from "react";
// import UseContextC from "./UseContextC";
import UseContextHook from "./UseContextHook";


const DataContext = createContext();
const CountContext = createContext();
const UseContextA = () => {
  const name = "Gajendra";
  const count = 10
  return (
    <DataContext.Provider value={name}>
      <CountContext.Provider value={count}>
        <UseContextHook />
      </CountContext.Provider>
    </DataContext.Provider>
  );
};

export default UseContextA;
export { DataContext,CountContext };
