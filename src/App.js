import React from 'react';
import './App.css';
import Header from "./Components/HeaderComponent/Header.js"
import CatsList from "./Components/CatsList/CatsList.js"
// import SearchByBreed from "./Components/Search By Breed Component/SearchByBreed.js"
import Footer from "./Components/FooterComponent/FooterComponent.js"
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
      <CatsList getCats = {this.getCats} cats = {this.state.cats}/>  
      <Footer /> 
   
    </div>
  );
}
 
  }
 
export default App;