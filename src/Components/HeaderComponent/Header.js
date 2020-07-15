import React from 'react';
import "./style.css"
class Header extends React.Component {
state = {}
render(){
    return (
        <div className="header">
          <div className="navbar">
          <div className="container">
              <h3> <span>Cats</span> Adoption</h3>
              {/* <a href="#contact">contact</a>
              <a href="#volunteer">cats</a>
              <a href="#volunteer">volunteer</a>
               <a href="#about us">about us</a>
              <a  href="#home">Home</a> */}
             
          </div>
          </div>
          <div className="slider"> 
          <div className="container"> 
          <div className="intro">
           <h2> ADOPT A CAT WE NEED YOUR HELP.</h2>
           <button> <span>FIND A CAT TO ADOPT</span></button>
          </div>
          
          </div>
          </div>
      </div>
    )
}
}

export default Header