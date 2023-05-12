import React, { Component } from 'react'

class ClassComp extends Component {
    constructor(){
        super();
        this.state = {
            name : "John",
            eyeColor : "blue",
            age : 27,
            skills : "java developer"
        }
        
    }
  render() {
    return (
      <>
      <h3>My name is {this.state.name} , My eyeColor is {this.state.eyeColor} and I am {this.state.age} years old......</h3>
      </>
    )
  }
}



export default ClassComp;