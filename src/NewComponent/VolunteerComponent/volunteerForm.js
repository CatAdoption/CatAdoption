import React from 'react';
import HeaderForEvery from "./../HeaderForEvery/HeaderForEvery.js"
import Footer from "./../FooterComponent/FooterComponent.js"
import axios from 'axios';
import CheckBox from "./checkBox.js"

class VolunteerForm extends React.Component {
state = {
    firstName:'',
    lastName : '',
    email: '',
    adress:'',
    mobile: '',
    message:'',
    days:[
   {id: 1, value: "saturaday", isChecked: false},
   {id:2, value: "sunday", isChecked: false},
   {id: 3, value: "monday", isChecked: false},
   {id: 4, value: "thusday", isChecked: false},
   {id: 5, value: "wednesday", isChecked: false},
   {id: 6, value: "thursday", isChecked: false},
   {id: 7, value: "friday", isChecked: false}
    ],
}

handleCheckChieldElement = (event) => {
    let days = this.state.days
    days.forEach(day => {
       if (day.value === event.target.value)
          day.isChecked =  event.target.checked
    })
    this.setState({days: days})
  }
  handleChange = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

handleSubmit = (e)=>{
    e.preventDefault();
 
    let checkArray = [];
    const days = this.state.days
    for(var i= 0 ; i<days.length;i++){
      if (days[i].isChecked === true) {
        checkArray.push(days[i].value);
    }
  }
  let CheckedDays = checkArray.toString()

    const{firstName,lastName,email,mobile,adress,message}=this.state
   console.log(firstName,lastName,email,mobile,adress,CheckedDays,message)
   axios.post('http://localhost:4000/Vol', {
    firstName : firstName,
    lastName : lastName,
    email :email,
    adress: adress,
    mobile : mobile,
    CheckedDays:CheckedDays,
    message:message
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
        {HeaderForEvery('Filling Volunteer Form')}
       <div className="container">
         <div className="row">
           <div className="col-md-6 mt-5 mx-auto">
             <form noValidate onSubmit={this.handleSubmit}>
               <h1 className="h3 mb-3 font-weight-bold">Volunteer Form</h1>
               <div className="form-group">
                 <label  className = "mb-3 text-dark font-weight-bold" htmlFor="name">First Name</label>
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
                 <label className = "mb-3 text-dark font-weight-bold" htmlFor="name">Last Name</label>
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
                 <label className = "mb-3 text-dark font-weight-bold" htmlFor="email">Email Address</label>
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
                 <label className = "mb-3 text-dark font-weight-bold" htmlFor="Adress">Adress</label>
                 <input
                   type="text"
                   className="form-control"
                   name="adress"
                   placeholder="Enter Your Adress"
                   value={this.state.adress}
                   onChange={this.handleChange}
                 />
               </div>
               <div className="form-group">
                 <label className = "mb-3 text-dark font-weight-bold" htmlFor="Mobile">Mobile</label>
                 <input
                   type="tel"
                   className="form-control"
                   name="mobile"
                   placeholder="Enter Your Mobile No."
                   value={this.state.mobile}
                   onChange={this.handleChange}
                 />
               </div>
               <fieldset className="form-group">
							<label htmlFor="day"><span>Which days you can be volunteer?</span></label>
                            <div className="form-group ">
                            {
                            this.state.days.map((day) => {
                            return (<CheckBox {...day} handleCheckChieldElement = {this.handleCheckChieldElement} />)
                            })
                            }
                                <div className="form-group">
						    <label htmlFor="note"><span>Volunteer Note</span></label>
						    <textarea className="form-control"  value={this.state.message}   onChange={this.handleChange} name="message" id="exampleTextarea" rows="5" placeholder="Write message"></textarea>
						  </div>						  
                <button type="submit"  className="btn btn-lg font-weight-bold btn-secondary btn-block" >  Send Your Request </button>                            
                </div>
				</fieldset>

          
               
             </form>

           </div>
         </div>
       </div>
       <Footer />
       </div>
    )
}
}

export default VolunteerForm
