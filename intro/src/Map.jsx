import React from 'react'

function Map() {
const   items = [
        {
           "team":"mi"
        },
        {
            "team":"srh"
        }
    ]
  return (
    <div>
        {
            items.map((val)=>{
                return(
                    
                    <h1>{val.team}</h1>
                    
                )
            })
        }

    </div>
  )
}

export default Map