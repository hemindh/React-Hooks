import React, { useState } from 'react'

const FuncCounterThree = () => {

  const [Name , setName] = useState({
    FirstName : '',
    LastName : '',
    Email : '',
    Password : ''
  });

  const handleFirstName = (e) => {
    setName({
        ...Name,
        FirstName : e.target.value,
    })
  }

  const handleLastName = (e) => {
    setName({
        ...Name,
        LastName : e.target.value
    })
  }

  const handleEmail = (e) => {
    setName({
        ...Name,
        Email : e.target.value
    })
  }

  return (
    <>

      <h2>useState is used With Object</h2><br/>

      <label>FirstName : </label>
      <input 
        type='text'
        placeholder='Enter Your First Name'
        value={Name.FirstName}
        onChange={handleFirstName}
      /><br/><br/>

      <label>LastName : </label>
      <input 
        type='text'
        placeholder='Enter Your Last Name'
        value={Name.LastName}
        onChange={handleLastName}
      /><br/><br/>

      <label>Email : </label>
      <input 
        type='text'
        placeholder='Enter Your Last Name'
        value={Name.Email}
        onChange={handleEmail}
      /><br/><br/>



      <label>Password : </label>
      <input 
        type='password'
        placeholder='Enter Your Password'
        value={Name.Password}
        onChange={e => setName({...Name , Password : e.target.value})}
      /><br/><br/>

      <p>
        {
            <p>
                
               Your FirstName is : {Name.FirstName}<br/>
               Your LastName is :  {Name.LastName}<br/>
               Your Email is :  {Name.Email}<br/>
               Your Password is :  {Name.Password ? "Hide" : "show"}

            
            </p> 
            

        }
      </p>



    </>
  )
}

export default FuncCounterThree