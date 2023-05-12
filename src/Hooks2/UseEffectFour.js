import React, { useEffect, useState } from 'react'

const UseEffectFour = () => {

   const [count , setCount] = useState(0);

   useEffect(() => {
      const timer = setTimeout(() => {

        setCount(count + 1)
        
      }, 1000);


//Here we can write the cleanup function............. and pass the empty dependencies

   return () => {
     clearTimeout(timer)
     console.log('cleanup useEffect')
   }

   },[] )
//no pass the dependencies then timeout effect is call again and again otherwise after 1 count it will stop

  return (
    <>

        <h2>My code is run {count} Time !!!</h2>
        
    </>
  )
}

export default UseEffectFour