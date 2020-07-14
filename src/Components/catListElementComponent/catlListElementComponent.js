import React,{Component} from 'react';
import "./style.css";


export default class catListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"kitten" ,
      origin: "", 
      url: "",
      description: "" ,
      id: "" , 
      lifespan: "" ,
      temparent: "" ,
      healthIssues: ""
    };
  }
    render(){
      return(
      <div>
        <h1>My name is {this.state.name}! </h1>
        <br/>
        <img src ="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2"/>
        <br/>
        <br/>
        <br/>
        <p><span>&nbsp;&nbsp;</span>Facts about me:</p>
        <ul>
          <li>Id:{this.state.id}</li>
          <li>Origin:{this.state.origin}</li>
          <li>Lifespan:{this.state.lifespan}</li>
          <li>Temparent:{this.state.temparent}</li>
          <li>Health Issues{this.state.healthIssues}</li>
          <li>Description:{this.state.description}</li>
        </ul>
      </div>
      )
    }
  }