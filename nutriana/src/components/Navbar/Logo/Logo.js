import React from 'react'
import "./Logo.css"
import undraw_breakfast_psiw from './undraw_breakfast_psiw.svg'

function Logo() {
    return (
        <div className = "Logo">
           <img src= {undraw_breakfast_psiw} alt='Logo' height="100px" width="100px"/> 
           <span className = "LogoText">FoodAnalyst</span>
        </div>
    )
}

export default Logo
