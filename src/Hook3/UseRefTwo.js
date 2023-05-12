import React, { useEffect, useRef, useState } from "react";

const UseRefTwo = () => {
  const [count, setCount] = useState("");
  const valueRef = useRef(0);

  useEffect(() => {
    valueRef.current = valueRef.current + 1;
  },[]);

  return (
    <>
      <h2>useRef Hook</h2><br/>

      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      /><br/><br/>

      <p>Your Typing character is {valueRef.current}</p>
    </>
  );
};

export default UseRefTwo;
