import React from 'react';
import axios from 'axios';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class User extends React.Component {
state = {
    firstName:'',
    lastName : '',
    email: '',
    mobile: ''   
}
handleChange = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    const{firstName,lastName,email,mobile}=this.state
   console.log(firstName,lastName,email,mobile)
   axios.post('http://localhost:4000/Bis', {
    firstName : firstName,
    lastName : lastName,
    email :email,
    mobile : mobile
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
        <MuiThemeProvider>
            <AppBar title="Enter Your Details" />
            <TextField
              required
              name = 'firstName'
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={this.handleChange}
              defaultValue={this.state.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
            required
              placeholder="Enter Your Last Name"
              name = 'lastName'
              label="Last Name"
              onChange={this.handleChange}
              defaultValue={this.state.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              required
              placeholder="Enter Your Email"
              name = 'email'
              label="Email"
              onChange={this.handleChange}
              defaultValue={this.state.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              required
              placeholder="Enter Your Mobile NO."
              label="Mobile No."
              name= 'mobile'
              onChange={this.handleChange}
              defaultValue={this.state.mobile}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
            onClick= {this.handleSubmit}
              color="primary"
              variant="contained"
            >Submit Data</Button>
      </MuiThemeProvider>
    )
}
}

export default User