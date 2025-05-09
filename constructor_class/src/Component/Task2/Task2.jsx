import React, { Component } from 'react'

export default class Task2 extends Component {
  constructor(){
    super()
    this.state={
        color : "white"
    }
  }
  handdle = (color)=>{
  this.setState({
    color : color
  })
  }

  render() {
    
    return (
      <div style={{backgroundColor:this.state.color , width:"100%" , height:"100vh", margin:"30px", justifyContent:"center" , justifyItems:"center" , alignContent:"center"}}>

        <div style={{display:"flex" , gap:"30px"}}>

            <button style={{backgroundColor:"gray"}} onClick={()=>this.handdle("gray")}>gray</button>
            <button style={{backgroundColor:"yellow"}} onClick={()=>this.handdle("yellow")}>yellow</button>
            <button style={{backgroundColor:"pink"}} onClick={()=>this.handdle("pink")}>pink</button>
        

        </div>

         
      </div>
    )
  }
}
