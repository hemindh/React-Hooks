import React, { useEffect, useState } from 'react'

const UseEffectTwo = () => {

  const [count , setCount] = useState(0);
  const [Name , SetName] = useState('');


  useEffect(() => {
    document.title = `You Clicked ${count} times`
    console.log("count")
  } , [count])

//Only Clicking click !!! Button at that time only call useEffect No run useEffect when we typing in input field.....................
  return (
    <>
      <input 
        type='text'
        value={Name}
        onChange={e => SetName(e.target.value)}
      
      />
      <button onClick={() => setCount(count + 1)}> click !!!</button>


    </>
  )
}

export default UseEffectTwo