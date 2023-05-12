import React, { useState } from 'react'

const InputValue = () => {

  const [person , SetPerson] = useState({
    FirstName:"Adam",
    LastName : "Khan",
    Email : "adam@khan.com",
  });

  const handleFirstName = (e) => {
    SetPerson({
        ...person,
        FirstName : e.target.value
    })
  }

  const handleLastName = (e) => {
    SetPerson({
        ...person,
        LastName : e.target.value
    })
  }


  const handleEmail = (e) => {
    SetPerson({
        ...person,
        Email : e.target.value
    })
  }


  return (
    <>
      <label>FirstName : </label>
      <input type="text" value={person.FirstName} onChange={handleFirstName}/><br/>
     

      <label>LastName : </label>
      <input type="text" value={person.LastName} onChange={handleLastName}/><br/>
      


      <label>Email : </label>
      <input type="email" value={person.Email} onChange={handleEmail}/><br/>

     
                <p>
                   FirstName : {person.FirstName}{' '} <br/>
                   LastName  : {person.LastName}{' '}  <br/>
                   Email     : {person.Email}{' '}
                </p>
         
       
      
      
</>
    
  )
}

export default InputValue