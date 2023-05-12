import React, { useRef } from 'react'

const UseRefOne = () => {

const paraRef = useRef(null);
const inputRef = useRef(null);

  const handleClick = () => {
    paraRef.current.style.color = "blue"
    paraRef.current.style.backgroundColor = "pink"
    paraRef.current.style.padding = "15px"

    

    inputRef.current.focus();
    inputRef.current.style.marginTop = "10px"

  }
  return (
    <>

       <p ref={paraRef}>useRef Hook.......</p>

       <input 
       type='text'
       ref={inputRef}
       />

       <button onClick={handleClick}>Click !!!</button>

    </>
  )
}

export default UseRefOne