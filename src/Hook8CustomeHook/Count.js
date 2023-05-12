import React from 'react'
import useCustomCounter from './useCustomCounter'

const Count = () => {

 const [count , Increment , Decrement , Reset] = useCustomCounter()

  return (
    <>
        
        <h1>Count = {count}</h1>
        <button onClick={Increment}>INC</button>
        <button onClick={Decrement}>DEC</button>
        <button onClick={Reset}>RESET</button>



        
    </>
  )
}

export default Count