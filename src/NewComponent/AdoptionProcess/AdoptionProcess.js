import React from 'react';
import "./style.css"

class AdoptionProcess extends React.Component {
  constructor(props){
    super(props);
    this.state={};
} 

render(){
    return(

<section class="process-area section-gap">
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="menu-content pb-60 col-lg-8">
            <div class="title text-center">
                <h1 class="mb-10">Process to Adopt a Cat</h1>
                <p>We are in extremely love with your desire for our service</p>
            </div>
        </div>
    </div>					
    <div class="row">
        <div class="col-lg-3 col-md-6">
            <div class="single-process">
                <span class="lnr lnr-thumbs-up"></span>
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
        <div class="col-lg-3 col-md-6">
            <div class="single-process">
                <span class="lnr lnr-license"></span>
                <a href="#">
                    <h4>
                        Adoption Form Filling
                    </h4>
                </a>
                <p>
                    After you choose your favorite Cat that you need to adopt you need to fill a Form and we recieve and revise it 
                </p>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div class="single-process">
                <span class="lnr lnr-magic-wand"></span>
                <a href="#">
                    <h4>
                        Bring to new family
                    </h4>
                </a>
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