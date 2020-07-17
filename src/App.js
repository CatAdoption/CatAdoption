// import React from 'react';
// import './App.css';
// import Header from "./Components/HeaderComponent/Header.js"
// import CatsList from "./Components/CatsList/CatsList.js"
// // import SearchByBreed from "./Components/Search By Breed Component/SearchByBreed.js"
// import Footer from "./Components/FooterComponent/FooterComponent.js"
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     cats : []
//     }
//   }
//   getCats = (cats)=>{
//   this.setState({cats:cats})
//   console.log(cats)
//   }
//   render(){
//     return (
//     <div className="App">
//       <Header />
//       <CatsList getCats = {this.getCats} cats = {this.state.cats}/>  
//       <Footer /> 
   
//     </div>
//   );
// }
 
//   }
 
// export default App;

import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import {Header,Home} from './NewComponent/HeaderComponent/Header.js'
import About from './NewComponent/AboutComponent/About.js'
import VolunteerForm from './NewComponent/VolunteerComponent/volunteerForm.js'
import Contact from './NewComponent/ContactComponent/contact.js'
import CatsList from './NewComponent/CatsList/CatsList.js'


class App extends Component {
  render() {
    return (
     <Router>
       <div className="App">
       <Header/>
       <Switch>
     <Route exact path="/"  component={Home} />
     <Route path="/about" component={About} />
     <Route path="/volunteer" component={VolunteerForm} />
     <Route exact path="/Cats"  component={CatsList} />
     <Route path="/contact" component={Contact} />
     </Switch>
     </div>
     </Router>
    )
  }
}

export default App