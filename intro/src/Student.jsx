import React from 'react'

function Student(props) {
    console.log(props)
  return (
    <div>
        <h1>hi</h1>
    <h1>student Name {props.data1.name}</h1>
    <h1>student age {props.data1.age}</h1>
    <h1>student village {props.village1}</h1>
    </div>
  )
}

export default Student