import React from 'react';
import axios from 'axios';
import "./style.css"
import Footer from "./../FooterComponent/FooterComponent.js"
import HeaderForEvery from "./../HeaderForEvery/HeaderForEvery.js"

class User extends React.Component {
  constructor(props){
    super(props);
   this.state = {
    firstName:'',
    lastName : '',
    email: '',
    phone: '',
    catBreed: this.props.catArr.breeds[0].name,
    catID: this.props.catArr.id,
    catImg :this.props.catArr.url
} 
  }

  previous = (e)=>{
    e.preventDefault();
    this.props.previous()
    }

  handleChange = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    const{firstName,lastName,email,phone,catBreed,catID,catImg}=this.state
   console.log(firstName,lastName,email,phone,catBreed,catID,catImg)
   axios.post('http://localhost:4000/Adopt', {
    firstName : firstName,
    lastName : lastName,
    email :email,
    phone : phone,
    catBreed : catBreed,
    catID: catID,
    imageUrl : catImg 
 
   })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
}
render(){
  return (
    <div>
     {HeaderForEvery('Filling Adoption Form')}
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-bold">Adoption Form </h1>
            <div className="form-group">
              <label  className = "mb-3 text-dark font-weight-bold" htmlFor="name">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className = "mb-3 text-dark font-weight-bold" htmlFor="name">Last name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Enter your last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className = "mb-3 text-dark font-weight-bold" htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Your Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className = "mb-3 text-dark font-weight-bold" htmlFor="Mobile">Mobile</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Enter Your Mobile"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-lg font-weight-bold btn-secondary btn-block"
            >
              Submit Your Data
            </button>
            
          </form>
          <div className="returnToprevious">
          <button onClick={this.previous}> {"<- "} Return To Previous Page</button>
        </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}
}


export default User