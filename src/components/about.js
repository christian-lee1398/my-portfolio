import React, { Component } from 'react';
import "../styles/about.css";

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="content">
                        <h1 className="header">
                            Hi, I'm Christian!
                            <br />I love building functional and beautiful apps
                        </h1>
                        <p className="sub-header">
                            Additionally, I love learning new things and applying new concepts to my craft.<br />
                            Thinking methodically and having success be the outcome is personally the most
                            rewarding feeling.
                        </p>
                        <div className="btns">
                            <a
                                href="#contact"
                                className="contact-btn">
                                Work With Me
                            </a>
                            <a
                                href="#projects"
                                className="projects-btn">
                                Past Work
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;