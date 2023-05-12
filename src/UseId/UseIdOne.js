import React, { useId } from 'react'
import '../App.css'
const UseIdOne = () => {
    const firstId = useId();
    console.log(firstId)
    const secondId = useId();
  return (
    <>
 
  <h1>useId hook in React.......</h1>
        <p>This is paragraph One - {firstId}</p>

        <p>This is paragraph One - {secondId}</p>


    </>
  )
}

export default UseIdOne;

//useId Hooks Generated the Unique Id............. with (:r1: , :r2: [with colon random id it will generated])
