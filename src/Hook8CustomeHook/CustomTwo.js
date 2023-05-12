import React from 'react'
import useCount from './CustomOne'

const CustomTwo = () => {

    const data = useCount();
    const data1 = useCount();
  return (
    <>

   <h1>{data.count}</h1>

   <button onClick={data.handleIncrement}>INC</button>

   <h1>{data1.count}</h1>

<button onClick={data1.handleIncrement}>INC</button>

    </>
  )
}

export default CustomTwo