import React, { useMemo, useState } from 'react'

const UseMemoOne = () => {

  const [counterOne , setCounterOne] = useState(0);
  const [counterTwo , setCounterTwo] = useState(0);

  const IncrementCount = () => {
    setCounterOne(counterOne + 1);
  }

  const DecrementCount = () => {
    setCounterTwo(counterTwo + 1);
  }

  const isEven = useMemo(() => {
    console.log("useMemo is called 1")
    
    let i = 0;
    while(i < 2000000000) i++;
    return counterOne %2=== 0;
  },[counterOne])

  return (
    <>
    {
        console.log("2")
    }
       <h2>useMemo Hook.....</h2>
       {
        isEven ?  'Even' : 'Odd'
       }

       <button onClick={IncrementCount}>counterOne : {counterOne}</button>
       <button onClick={DecrementCount}>counterTwo : {counterTwo}</button>


    </>
  )
}

export default UseMemoOne;


//useMemo() is a function that returns a memoized value 
//useMemo also accept 2 Argument (callback function and dependencies)
//useMemo Hook is used to maintain our Application Performance Optimization.....
//It's cache the Memorized value as a dependency..........

//why we need to pass the dependency in usememo Hook ?
//Answer :- stop the inessential(Other Not Necessary Function) running  [Ana per Effect na pade atle useMemo Hook is used ]

// useMemo Hook ne kai shakia ke apde Counterone Update thay tyare j performance slow krvani che otherwise nooo

//Example :- when the app performance is down then use the memo hook and pass the dependencies...

//No dependency :- Memo code is render agin and again [console.log]
//[] - Empty dependency hoi tyare useMemo no code aek j var run thashe and other logs are call again and again
//[Memorized value(counterOne)] :- // Counterone Update thay tyare j performance slow consider thashe other functions is no affected with this logic (other functions is running well)




//jyare apde state update kriye chiye tyare counter is not increase but function is call so tenathi thta performance issue ne stop krva we use the ........................................................... 



//we can not call useMemo in a loop,iteration 
//Call useMemo at the top level
//The useMemo Hook only runs when one of its dependencies update. This can improve performance.

//Memoization :- value cache so does not need to be recalculated


//play with any data value then use the useMemo hook
//Hoisting na concept thi re-render thashe state......................
