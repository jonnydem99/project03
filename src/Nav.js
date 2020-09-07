import React from 'react'
import './App.css'; 
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h3>Task Management App</h3>
            <div className="nav-links">
                <Link style={{textDecoration: 'none'}} to="/"><li>Home</li></Link>
                <Link style={{textDecoration: 'none'}} to="/about"><li>About</li></Link>
                <Link style={{textDecoration: 'none'}} to="/contact"><li>Contact</li></Link>
            </div>
        </nav>
    )
}