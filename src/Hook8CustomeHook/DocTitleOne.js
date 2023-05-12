import React, { useState } from 'react'
import useDocTitle from './useDocTitle';

const DocTitleOne = () => {
    const [count , setCount] = useState(0);

    useDocTitle(count)
  return (
    <>

      <button onClick={() => setCount(count + 1)}>Count - {count}</button><br/>

    </>
  )
}

export default DocTitleOne