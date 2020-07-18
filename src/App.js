
import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import {Home} from './NewComponent/HeaderComponent/Header.js'
import About from './NewComponent/AboutComponent/About.js'
import VolunteerForm from './NewComponent/VolunteerComponent/volunteerForm.js'
import CatsList from './NewComponent/CatsList/CatsList.js'
import Landing from './NewComponent/LandingComponent/Landing'
import SignUp from './NewComponent/SignUp/SignUpComponent'
import {Login,PrivateRoute }from './NewComponent/userAuth/userlogin'
// import ProtectedRoute from './NewComponent/userAuth/userlogin'


class NotFound extends Component {
  render() {
    return (
      <h1>404 NOT FOUND</h1>
    )
  }
}
class App extends Component {
  render() {
    return (
     <Router>
       <div className="App">
       <Switch>
       <Route exact path="/"  component={Landing} />
       <Route exact path="/signUp" component={SignUp} />
       <Route exact path="/login" component={Login} />
       <PrivateRoute exact path="/home"  component={Home}></PrivateRoute>
      <PrivateRoute path="/about" component={About}></PrivateRoute>
      <PrivateRoute path="/volunteer" component={VolunteerForm}></PrivateRoute>
      <PrivateRoute exact path="/Cats"  component={CatsList}></PrivateRoute>
      <Route path="*" component={NotFound}  />
            
     </Switch>
     </div>
    
     </Router>
    )
  }
}

export default App
