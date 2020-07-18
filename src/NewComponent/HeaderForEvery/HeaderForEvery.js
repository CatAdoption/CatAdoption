import React from 'react';
import "./style.css"
import {Header,Home} from '../HeaderComponent/Header.js'
function HeaderForEvery (text){
        return (
            <div>
                <Header />
            <div className="slider"> 
            <div className="container"> 
            <div className="intro">
             <h2> {text}</h2>
            </div>
            
            </div>
            
            </div>
            </div>

        )
    }

export default HeaderForEvery