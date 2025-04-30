import Nav from "./Nav"
import './App.css'
import Student from "./Student"
import Childern from "../Childern"
import GeneralProps from "./GeneralProps"
import Map from "./Map"

function App(){

    const data = {
        name : "Akhil",
        age  : 22
    }
    const village = " NArayankhed"


    const pet = " Dog"
    return (
        <div>
        {/* genral props */}
         <Student  data1={data}  village1 = { village} />


          {/* children props */}
         <Childern>
            {pet}
         </Childern>

          {/* genral props */}
         <GeneralProps p={data}/>

           {/* map */}

           <Map/>


         
        </div>

      
    )
}
export default App