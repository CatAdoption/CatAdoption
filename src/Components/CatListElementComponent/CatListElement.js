import React from 'react';
import "./style.css";
import home from "./home.png"
import health from "./health.png"
import life from "./life.png"
import type from "./type.png"
class CatListElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  continue = (e)=>{
    e.preventDefault();
    this.props.cont()
    }
    previous = (e)=>{
      e.preventDefault();
      this.props.previous()
      }
    render(){
      return(
<div className="catListElement">
  <div className="container">
    <div className="picture">
    <a href={this.props.catElement.url}>
      <img src={this.props.catElement.url} alt="cat element" />
   </a>  
    </div>
    <div className="info">
      <h2>ABOUT</h2>
      <p>{this.props.catElement.breeds[0]["description"]}</p>

      <div className="catinfo">
        <div className="content">
          <div className="icon">
            <img src={home} alt="home" />
          </div>

          <div className="text">
            <h3>Origin</h3>
            <h4>{this.props.catElement.breeds[0]["origin"]} </h4>
          </div>
        </div>
        <div className="content">
          <div className="icon">
            <img src={health} alt="health" />
          </div>

          <div className="text">
            <h3>Health Issues</h3>
            <h4>{this.props.catElement.breeds[0]["health_issues"]} </h4>
          </div>
        </div>
        <div className="content">
          <div className="icon">
            <img src={life} alt="life" />
          </div>

          <div className="text">
            <h3>Life Span</h3>
            <h4>{this.props.catElement.breeds[0]["life_span"]} </h4>
          </div>
        </div>
        <div className="content">
          <div className="icon">
            <img src={type} alt="type " />
          </div>

          <div className="text">
            <h3>Breed Type</h3>
            <h4>{this.props.catElement.breeds[0]["name"]} </h4>
          </div>
        </div>
        <div className="adopt">
          <button onClick={this.continue}>Adopt This Cat</button>
        </div>
      </div>
    </div>
    <div className="returnToSearch">
          <button onClick={this.previous}> {"<- "} Return to search page</button>
        </div>
  </div>
</div>
      )
    }
  }

  export default CatListElement


//   <div className = "catListElement">
//   <h1>My name is {this.state.name}! </h1>
//   <br/>
//   <img src = {this.props.catElement.url}/>
//   <br/>
//   <br/>
//   <br/>
//   <p><span>&nbsp;&nbsp;</span>Facts about me:</p>
//   <ul>
//     <li>Id:{this.state.id}</li>
//     <li>Origin:{this.state.origin}</li>
//     <li>Lifespan:{this.state.lifespan}</li>
//     <li>Temparent:{this.props.catElement.breeds[0]['temperament']}</li>
//     <li>Health Issues{this.state.healthIssues}</li>
//     <li>Description:{this.state.description}</li>
//   </ul>
// </div>