import React from 'react'
import "./Form.css"

function Form(props) {
    return (
        <div className="FormDiv ma3 ">
            <textarea className ="TextArea br4" onChange={props.inputchange}></textarea>
            <div className="ButtonDiv" >
            <button className ="Button br3" onClick={props.ana}>Analyse</button>
            <button className ="Button br3" >New Recipie</button>
            
            </div>
            <p className="warning">We cannot calculate the nutrition for some ingredients.<br/> Please check the ingredient spelling or if you have entered a quantities for the ingredients.</p>
        </div>
    )
} 

export default Form
