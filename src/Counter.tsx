import { useState } from "react";
import style from "./Counter.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div style={style}>
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
