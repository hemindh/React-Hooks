import React, { useState } from 'react'

const Basic = () => {
    const [a , setA] = useState(0);
    const [b , setB] = useState(0);

    const Increment = () => {
          setA(a + 1);
          console.log('a is call')
    }

    const Decrement = () => {
        setB(b + 1)
        console.log('b is call')

    }
  return (
    <>
     <button onClick={Increment}>INC</button>
     <button onClick={Decrement}>DEC</button>

    </>
  )
}

export default Basic