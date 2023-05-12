import React , {useContext} from 'react'
import {UserContext , ChannelContext} from '../App';


const ComB = () => {

  const User = useContext(UserContext);
  const Channel = useContext(ChannelContext);

  return (
    <>

       <h1>Here UserContext value is - {User}</h1><br/><br/>

       <h1>Here UserContext value is - {Channel}</h1>



    </>
  )
}

export default ComB