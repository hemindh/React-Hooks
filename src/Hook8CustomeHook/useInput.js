import  { useState } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
     setValue(initialValue);
  }

  const myValue = {
    value,
    onChange : e => {
        setValue(e.target.value)
    }
  }


  return [value , reset , myValue]
}

export default useInput