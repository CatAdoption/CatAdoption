import React from 'react';
import './style.css'
class Volunteer extends React.Component {
state = {}
render(){
    return (
		<section id = "voluteer"class="calltoaction-area section-gap relative">
				<div class="container">
					<div class="overlay overlay-bg"></div>						
					<div class="row align-items-center justify-content-center">
						<h1 class="text-white">Want to help?<br /> Become a Volunteer</h1>
						<p class="text-white">
							Its our plesure to become volunteer With us if you need to be a volunteer please fill this form 
						</p>
						<div class="buttons d-flex flex-row">
							<a href="./volunteer" class="primary-btn text-uppercase">Register now</a>
						</div>
					</div>
				</div>	
			</section>
    )
}
}

export default Volunteer