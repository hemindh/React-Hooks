import React, { useState } from 'react'

function useCount(){
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };


  return {
    count ,
    handleIncrement
  }
}

export default useCount;