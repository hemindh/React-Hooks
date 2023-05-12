import React from 'react'

const File1 = () => {

    const array = ["Apple" , "banana" , "Mango"];

    const Jsx = "I am use the JSX!!!";

    let x = 5;

  return (
    <>
      <div className='container'>
        <h2>Hi ! I am React</h2>
        {
            array.map((item)=>{
               return (<p>{item}</p>)
            })
        }
        <h4>{Jsx}</h4>

        {
            (x) < 10 ? "condition is true" : "condition is false"
        }
      </div>
    </>
  )
}

export default File1