import React, { useContext } from "react";
import { DataContext, CountContext } from "./UseContextA";

const UseContextHook = () => {
  const name = useContext(DataContext);
  const count = useContext(CountContext);
  return (
    <div>
      name:{name},count:{count}
    </div>
  );
};

export default UseContextHook;
