import React from 'react';
import  "./styleOne.css"
class CatsList extends React.Component {
   constructor(props){
     super(props);
      this.state = {}   
   }

  render() {
      const{cats} = this.props
    return (
        <div className="featuredCats">
        <div className="container">
            <div className="featuedList">
                {cats.map((cat,index)=>
                <div key ={index}><img src= {cat.url}/></div>
                )}
        </div>
        </div>
        </div>
  
    )
}
}



export default CatsList

