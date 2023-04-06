import React, { Component } from 'react';
import "../styles/navbar.css"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.collapse = this.collapse.bind(this)
    }
    collapse(e) {
        const toggleButton = document.getElementsByClassName("toggle-button")[0];
        const navbarLinks = document.getElementsByClassName("navbar-links")[0];
        // navbarLinks.classList.toggle("active")
        toggleButton.addEventListener("click", () => {
            // if (navbarLinks.classList.contains("active")) {
            //     navbarLinks.classList.remove("active")
            // } else {
            //     navbarLinks.classList.add("active")
            // }
            navbarLinks.classList.toggle("active")
        })
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <nav className="navbar">
                    <a
                        href="https://www.linkedin.com/in/christianlee1398/"
                        className="brand"
                        target="_blank"
                        rel="noreferrer">
                        Christian Lee
                    </a>
                    <a href="#" className="toggle-button" onClick={this.collapse}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>
                    <div className="navbar-links">
                        <ul>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar