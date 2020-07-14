import React from 'react';
import './App.css';
import Header from "./Components/HeaderComponent/Header.js"
//import User from "./Components/User/User.js"
import CatsList from "./Components/CatsList/CatsList.js"
import SearchByBreed from "./Components/Search By Breed Component/SearchByBreed.js"
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    cats : []
    }
  }
  getCats = (cats)=>{
  this.setState({cats:cats})
  console.log(cats)
  }
  render(){
    return (
    <div className="App">
      <Header />
      <SearchByBreed  getCats = {this.getCats}/>
      <CatsList  cats = {this.state.cats}/>
      
      {/* <User  /> */}
    </div>
  );
}
 
  }
 
export default App;
