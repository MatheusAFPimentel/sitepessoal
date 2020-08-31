import React from "react"
import "./header.css"
import Logo from "../../assets/logoM.png"
import Git from "../../assets/git.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/insta.png"
import Twitter from "../../assets/twitter.png"

function Header() {
    return (
        <div>
            <ul className="header">
                <li><img src={Logo} alt="Alt" /></li>
                <li><a href="https://github.com/MatheusAFPimentel/"><img className="git" src={Git} alt="Git" /></a></li>
                <li><a href="https://www.linkedin.com/in/matheus-augusto-33077194/"><img className="linkedin" src={Linkedin} alt="Linkedin" /></a></li>
                <li><a href="https://www.instagram.com/matheusaugustt/"><img className="insta" src={Instagram} alt="Instagram" /></a></li>
                <li><a href="https://twitter.com/MatheussAugust0"><img className="twitter" src={Twitter} alt="Twitter" /></a></li>
            </ul>
        </div>
    )
}

export default Header