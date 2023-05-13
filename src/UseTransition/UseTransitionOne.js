import React, { useState, useTransition } from 'react'

const UseTransitionOne = () => {

    const [isPending , startTransition] = useTransition();
    const [value , setValue] = useState(0);
    const [name , setName] = useState("");

    console.log("isPending" , isPending)

   const Increment = () => {
     setValue(value + 1);
     console.log("Count value is Increase");
   }

   const handleChange = (e) => {
    startTransition(() => {

        setName(e.target.value);
        console.log("Input Handle Control")
    })
   }

  return (
    <>

       <h2>UseTransition Hook</h2>
       <p>Count - {value}</p>
       <button onClick={Increment}>Increment</button>

       <input 
       type='text'
       value={name}
       onChange={handleChange}
       />

    </>
  )
}

export default UseTransitionOne;