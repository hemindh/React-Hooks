import React, { useEffect, useState } from 'react'

const UseEffectThree = () => {

//Here We can see the how to write javascript code in useEffect and  what is Effect is generate when pass the empty dependencies in useEffect\
 
const [x , setX] = useState(0);
const [y , setY] = useState(0);

const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX)
    setY(e.clientY)

}

useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener('mousemove' , logMousePosition)
} , [])


  return (
    <>
        
       <p> Hook x - {x} y - {y}</p>


    </>
  )
}

export default UseEffectThree