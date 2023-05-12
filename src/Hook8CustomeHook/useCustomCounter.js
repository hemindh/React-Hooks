import {useState} from 'react'

const useCustomCounter = (initialState = 0) => {
    const [count , setCount] = useState(initialState);

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount(count - 1);
    }

    const Reset = () => {
        setCount(initialState);
    }

    return [count , Increment , Decrement , Reset]
}

export default useCustomCounter

//Also pass the initial state as a parameter (initialState)