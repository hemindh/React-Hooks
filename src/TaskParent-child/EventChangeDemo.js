import React, { useState } from 'react';
import '../App.css';


const EventChangeDemo = () => {

  let purple = '#A020F0';
  let name = 'Click Me !'  
  const [bg , setBg] = useState(purple);
  const [Name , setName] = useState(name);


  const bgChange = () => {
    setBg('#B2BEB5');
    setName('Ouch !!!  😛 ')
  }

  const bgBack = () => {
    setBg('#A020F0')
    setName('Click Me!')
  }

  return (
    <>
     <div className='container' style={{backgroundColor : bg}}>
        <button className='btn' onClick={bgChange} onDoubleClick={bgBack}>{Name}</button> 
        {/* //Not allowed the same onclick in one button  */}
     </div>
    </>
  )
}

export default EventChangeDemo;