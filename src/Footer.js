import React from "react"
import "./styles.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer(){
    return (
        <footer>
            <div className="col">
                <a href="https://www.linkedin.com/in/bharath-ranganathan/"><LinkedInIcon style={{"fontSize":50}}/></a>
                <a href="https://github.com/BHARATH-RANGANATHAN"><GitHubIcon style={{"fontSize":50}}/></a>
            </div>
        </footer>
    )
}

export default Footer;