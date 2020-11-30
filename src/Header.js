import React from "react"
import Weather from "./Components/Weather"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';

function Header(){
    return (
        <header>
            <div className="weather">
                <Weather />
            </div>
            <div className="title">
                <h1>News.ie</h1>
                <p>Irish News Website</p>
            </div>
            <div className="Search-icon">
            <Link className="nav-link" to="/Search"><SearchIcon style={{"fontSize":50,"color":"black"}}/></Link>
            </div>
        </header>
    )
}

export default Header;