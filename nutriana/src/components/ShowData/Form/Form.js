import React from 'react'
import "./Form.css"

function Form(props) {
    return (
        <div className="FormDiv">
            <p>Enter an ingredient list list for what you are cooking,
            like "50 gm chicken, 10 oz chickpeas", etc. Enter each ingredient on a new line.</p>
            <textarea className ="TextArea br4" onChange={props.inputchange}></textarea>
            <div className="ButtonDiv" >
                
            <button className ="Button br3 grow shadow-3" onClick={props.ana}>Analyse</button>
            {props.isLoaded?<button className ="Button br3 grow shadow-3" onClick={props.onReset} >Reset</button>:""}
            
            </div>
            <p className="warning">We cannot calculate the nutrition for some ingredients.<br/> Please check the ingredient spelling or if you have entered a quantities for the ingredients.</p>
        </div>
    )
} 

export default Form
