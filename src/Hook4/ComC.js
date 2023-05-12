import React from 'react'
import {UserContext , ChannelContext} from '../App';


const ComC = () => {

  return (
    <>

     <UserContext.Consumer>
        {
            user => {
                return (
                <ChannelContext.Consumer>
                {
                       Channel => {
                         return( <div>Username is - {user} and Channel  Name is { Channel }</div>)
                       }
                    
                 }   
               </ChannelContext.Consumer>
   ) }
        }
     </UserContext.Consumer>



    </>
  )
}

export default ComC