import React, { Component } from 'react'

 class ClassCounter extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        count : 0
     }
   }

    incrementCounter = () => {

        this.setState({
            count : this.state.count + 1
        })
    }

  render() {
    return (
      <>

        <h2>Class Counter : {this.state.count}</h2>

        <button onClick={this.incrementCounter} style={{height : "40px" , width : "100px" , fontSize : "20px"}}>Click</button>

      </>
    )
  }
}

export default ClassCounter