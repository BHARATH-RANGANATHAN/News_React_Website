import React from "react"
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/Sports">Sports</Link>
                    <Link className="nav-link" to="/Business">Business</Link>
                    <Link className="nav-link" to="/Science">Science</Link>
                    <Link className="nav-link" to="/Technology">Technology</Link>
                    <Link className="nav-link" to="/Health">Health</Link>
                    <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                </div>
        </nav>
    );
}

export default Nav;