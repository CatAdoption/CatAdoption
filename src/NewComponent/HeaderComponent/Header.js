import React from 'react';
import "./style.css"
import {Link} from "react-router-dom"
import Footer from "./../FooterComponent/FooterComponent.js"
import AdoptionProcess from "../AdoptionProcess/AdoptionProcess.js"
import Volunteer from "../VolunteerComponent/Volunteer.js"
import {authintication} from '../userAuth/userlogin'
class Home extends React.Component {
    state = {}
    render(){
        return (
            <div>
            <Header/>
            <div className="slider"> 
            <div className="container"> 
            <div className="intro">
             <h2> ADOPT A CAT WE NEED YOUR HELP.</h2>
             <Link to= "/cats">
             <button> <span>FIND A CAT TO ADOPT</span></button>
             </Link>
            </div>
            
            </div>
            
            </div>
            <AdoptionProcess />
            <Volunteer/>
            <Footer />
            </div>

        )
    }

}

class Header extends React.Component {
state = {}
logOut(e) {
    e.preventDefault()
    authintication.ofAuthintication();
     localStorage.removeItem('usertoken')
   
  }

render(){
    return (
        <div className="header">
          <div className="navibar">
              <nav>
                  <h3><span>CAT</span> ADOPTION</h3>
                  <ul className= "navLinks">
                  <Link underline="none" to= "/home"  >
                      <li>Home</li>
                      </Link>
                      <Link to= "/about">
                      <li>About</li>
                      </Link>
                      <Link to= "/volunteer">
                      <li>Volunteer</li>
                      </Link>
                      <Link to= "/cats">
                      <li>Cats</li>
                      </Link>
                      <Link to= "/login">
                      <li>logOut</li>
                      </Link>
                      {/* <Link to= "/contact">
                      <li>Contact</li>
                      </Link> */}
                  </ul>
              </nav>
          </div>
      
      </div>
    )
}
}

export{Header,Home} 
