/* eslint-disable default-case */
import React from 'react';
import  "./styleOne.css"
import CatListElement from "./../CatListElementComponent/CatListElement.js"
import SearchByBreed from './../Search By Breed Component/SearchByBreed.js'
import User from "./../User/User.js"

class CatsList extends React.Component {
   constructor(props){
     super(props);
      this.state = {
          step:1,
          arr:[]
      }   
   }
   nextStep (bis){
    const {step} = this.state
    this.setState({step:step +1})
    this.setState({arr:bis})
    console.log(this.state.arr)
}
cont = ()=>{
    const {step} = this.state
    this.setState({step:step +1})
}
prev = ()=>{
    const {step} = this.state
    this.setState({step:step -1})
}

render() {
  const{cats} = this.props
  const{step} = this.state
  switch(step){
    case 1:
        return (
            <div>
                <SearchByBreed getCats = {this.props.getCats} />
                <div className="featuredCats">
                    <div className="container">
                        <div className="featuedList">
                            {cats.map((cat,index)=>
                            <div key ={index}><img src= {cat.url} alt="" onClick={this.nextStep.bind(this,cat)} />
                            </div>
                            )}                    
                        </div>  
                    </div>
                </div>
            </div>
            )
    case 2:
        return(
            <CatListElement previous = {this.prev} catElement={this.state.arr} cont ={this.cont}/>  
        )
    case 3:
        return (
            <User  previous = {this.prev} catArr = {this.state.arr}/>
        )
  }
}
}



export default CatsList

