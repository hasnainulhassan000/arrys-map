import './App.css';
import { useState } from 'react';
import React from 'react';


function App() {
  const [islit, setlit ] = useState(true);
  const state = React.useState(true);
  const isLit = state[0];
  const setLit = state[1];
  const brightness = isLit ? "lit" : "dark";



// const city = [" (1 : KARACHI KING", "(2 : LAHORE QALANDER", "(3 : ISLAMABAD UNITED", " (4 : PISHAWAR ZALMI", " (5 : MULTAN SULTAN", " (6 : QUETTA GALEDIATORS"]

const cityName = [
  {name: "Karachi",tamp: "33°", percentej: "2%"  },
  {name: 'Lahore', tamp: "35°",percentej: "7%"  },
  {name: "Islamabad",tamp: "3°", percentej: "1%" }
]

  return (
    <>
    
    <div className="App">
    <div className={` ${brightness}`}>
    {isLit }
    <br />
    <p  onClick={() => setLit(!isLit)}>
    <img src="https://images-na.ssl-images-amazon.com/images/I/71vyKbDPH0L.png" height="35px" />
    </p>
  
      <div className="hello"><h1>Hello Header</h1></div>
      {cityName.map((v,i)=>{
            return(
              <>
              <center><div className="first">
            <div>
           Name :   {v.name}
          </div>
          <div>
          Tampracher :{v.tamp}
          </div>
          <div>
          Percentej :{v.percentej}
          </div>
          </div></center>
          </>
            )
          

         
      })}


      {/* {a.map((city)=>
      {
        return <h2>{
          city} </h2>
      })
      } */}
      

{/* {[     <h1>Hasnain</h1>, <h2>Hasnain</h2>,<h3>Hasnain</h3>,<h4>Hasnain</h4>,<h5>Hasnain</h5>,<h6>Hasnain</h6>]} */}


      <div className="footer"><h1>Hello Footer</h1></div>

    
    </div>
    </div>
    </>
  );
}

export default App;
