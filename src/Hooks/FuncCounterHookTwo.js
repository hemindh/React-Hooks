import React, { useState } from 'react'

const FuncCounterHookTwo = () => {

    const initialValue = 0;
    const [count , setCount] = useState(initialValue);

    const IncrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1) //Here only increment by 1
            setCount(prevCount => prevCount + 1 ) // This is the right way to increment the count by 5..........
        }
    }

  return (
    <div>
        Count : {count} {' '}

        <button onClick={() => setCount(initialValue)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1 )}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1 )}>Decrement</button>
        <button onClick={IncrementFive}>Inc +5</button>


    </div>
  )
}

export default FuncCounterHookTwo