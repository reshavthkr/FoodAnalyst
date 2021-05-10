import React from 'react'
import './Hero.css'
import undraw_barbecue_3x93 from "./Background/undraw_barbecue_3x93.svg"

function Hero() {
    return (
        <div className = "Hero" >
            <div className="heading">
            <p className="pheading">Tell me what you eat,<br/> and I will tell you What you gain.</p>
            </div>
            <img src={undraw_barbecue_3x93} alt ="" className ="Image" height="400px"/>
        </div>
    )
}

export default Hero
