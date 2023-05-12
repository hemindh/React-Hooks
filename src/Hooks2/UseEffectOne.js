import React, { useEffect, useState } from "react";

const UseEffectOne = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("clicked 3");

    // setCount(count + 1);
  });
  //inner pass the dependencies count then when we update only count after re-render again and again
  //pass the dependencies count after no render the input field data otherwise it is render again and again
  //pass empty dependency then no re-render again only one time it is render
  //prevcount = 2
  //component rendering again and again or also update the state
  return (
    <>
      <h3>useEffect Hook</h3>

      <p>You clicked {count} time</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* we are setvalue defined in useeffect then error is occured  */}

      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </>
  );
};

export default UseEffectOne;
