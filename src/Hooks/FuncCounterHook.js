import React, { useState } from 'react'

const FuncCounterHook = () => {

    const [count , setCount]  = useState(0)
  return (
    <>
    <h3>Functional Component Hook Counter</h3>

    <p>{count}</p>
    <button onClick={() => setCount(count + 1)} style={{height : "50px" , width : "120px" , fontSize : "15px"}}>Click Counter !</button>

    </>
  )
}

export default FuncCounterHook