import React from "react"
import "./header.css"
//import Logo from "../../assets/logoM.png"
import Git from "../../assets/git.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/insta.png"
import Twitter from "../../assets/twitter.png"

function Header() {
    return (
        <div>
            <img src="https://fontmeme.com/permalink/200909/242365964ca871929d89e6deae3d9e35.png" alt="Alt" className="logo" />
            <div className="links">
                <aside >
                    <a href="https://github.com/MatheusAFPimentel/"><img src={Git} alt="Git" /></a>
                    <a href="https://www.linkedin.com/in/matheus-augusto-33077194/"><img src={Linkedin} alt="Linkedin" /></a>
                    <a href="https://www.instagram.com/matheusaugustt/"><img src={Instagram} alt="Instagram" /></a>
                    <a href="https://twitter.com/Matheusafpiment"><img src={Twitter} alt="Twitter" /></a>
                </aside>
            </div>
        </div>
    )
}

export default Header