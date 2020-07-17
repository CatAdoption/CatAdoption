import React from 'react';
import './style.css'
class Volunteer extends React.Component {
state = {}
render(){
    return (
		<section id = "voluteer"className="calltoaction-area section-gap relative">
				<div className="container">
					<div className="overlay overlay-bg"></div>						
					<div className="row align-items-center justify-content-center">
						<h1 className="text-white">Want to help?<br /> Become a Volunteer</h1>
						<p className="text-white">
							Its our plesure to become volunteer With us if you need to be a volunteer please fill this form 
						</p>
						<div className="buttons d-flex flex-row">
							<a href="./volunteer" className="primary-btn text-uppercase">Register now</a>
						</div>
					</div>
				</div>	
			</section>
    )
}
}

export default Volunteer