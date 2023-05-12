import React, { useState } from 'react'

// const PropsEx = ({ title , src , props } ) => {
  const PropsEx = (props) => {

  const [data , setData] = useState(false);

  function updateData(){
    setData(!data)
  }

  return (
    <>

       <h4>Hello Props.....</h4>
       <h1>{data ? props.name2 : props.name1}</h1>
       {/* <p>{title.title}</p>
       <img 
        style={{height : "300px" , width : "400px"}}
        src= {src}
       /><br/> */}

       <button onClick={updateData}>Change props !</button>


       


      
    </>
  )
}

export default PropsEx