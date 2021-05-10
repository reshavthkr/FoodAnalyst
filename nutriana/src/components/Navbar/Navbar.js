import React from 'react'
import Link from './Links/Link'
import Logo from './Logo/Logo'
import "./Navbar.css"

function Navbar() {
    return (
        <div className = "NavBar">
            <Logo className = " logo" />
            <Link className = " link"/>
        </div>
    )
}

export default Navbar
