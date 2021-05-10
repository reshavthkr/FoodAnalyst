import React from 'react'
import "./Link.css"

function Link() {
    return (
        <div className="Link">
            <ul className ="ma2 pa2">
            <li className ="ml2 pa2"><a href="#" className = "active">Nutritional Analysis</a></li>
            <li className ="ml2 pa2"><a className="notActive">Recipies</a></li>
            <li className ="ml2 pa2"><a className="notActive">Find Ingredients</a></li>
            </ul>
        </div>
    )
}

export default Link
