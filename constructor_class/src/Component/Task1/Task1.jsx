import React, { Component } from 'react'

export default class Task1 extends Component {
    constructor(){
         super()
         this.state={
            count:0
         }
    }
    add = () =>{
        this.setState({
            count: this.state.count+1
        })
    }
    remove  = () =>{
        this.setState({
            count: this.state.count-1
        })
    }

   
  render() {
    return (
      <div style={{textAlign:"center", marginTop:"70px", width:"100%"}}>
        <h1>{this.state.count}</h1>
        <div style={{display:"flex", textAlign:"center" , justifyContent:"center" , gap:"30px" }}>
            <button style={{background:"green" , width:"50px", cursor:"pointer"}} onClick={this.add}>+</button>
            <button style={{background:"red" , width:"50px" , cursor:"pointer"}} onClick={this.remove}>-</button>
        </div>
      </div>
    )
  }
}
