import React from 'react';
import "./style.css"

class AdoptionProcess extends React.Component {
  constructor(props){
    super(props);
    this.state={};
} 

render(){
    return(

<section className="process-area section-gap">
<div className="container">
    <div className="row d-flex justify-content-center">
        <div className="menu-content pb-60 col-lg-8">
            <div className="title text-center">
                <h1 className="mb-10">Process to Adopt a Cat</h1>
                <p>We are in extremely love with your desire for our service</p>
            </div>
        </div>
    </div>					
    <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="single-process">
                <span className="lnr lnr-thumbs-up"></span>
                <a href="/Cats">
                    <h4>
                        Pet Selection
                    </h4>
                </a>
                <p>
                    You Can select the Cat Breed that you need to adopt form Cats button in Navbar
                </p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="single-process">
                <span className="lnr lnr-license"></span>
                    <h4>
                        Adoption Form Filling
                    </h4>
                <p>
                    After you choose your favorite Cat that you need to adopt you need to fill a Form and we recieve and revise it 
                </p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="single-process">
                <span className="lnr lnr-magic-wand"></span>
                    <h4>
                        Bring to new family
                    </h4>
                <p>
                    After revising you request you can take Your adopted cat from us 
                </p>
            </div>
        </div>																		
    </div>
</div>	
</section>


    )
}

}

export default AdoptionProcess