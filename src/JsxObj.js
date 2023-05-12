import React from 'react'



const user = {
    name : "Harsh Gor",
    imageUrl : "https://img.rawpixel.com/private/static/images/website/2022-05/fl46559944424-image-ku2cmi60.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=7f4c35ab692d08dbd2a094d6f1561311",
    imageSize : 400,
}

const JsxObj = () => {
  return (
    <>
      <div>
        <h3>jsx with object</h3>
        <h4>User name is {user.name}</h4>
        <img 
        className='My_Image'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
            height: user.imageSize,
            width : '600px',
            boxShadow: '10px 10px 15px black',
        }}
         />
      </div>
    </>
  )
}

export default JsxObj;