import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import {Header,Home} from './NewComponent/HeaderComponent/Header.js'
import About from './NewComponent/AboutComponent/About.js'
import Volunteer from './NewComponent/VolunteerComponent/Volunteer.js'
import Contact from './NewComponent/ContactComponent/contact.js'
import CatsList from './NewComponent/CatsList/CatsList.js'


class App extends Component {
  render() {
    return (
     <Router>
       <div className="App">
       <Header/>
       <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/volunteer" component={Volunteer } />
     <Route path="/Cats" exact component={CatsList} />
     <Route path="/contact" component={Contact} />
     </Switch>
     </div>
     </Router>
    )
  }
}

export default App