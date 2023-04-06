import React, { Component } from 'react';
import { skills } from '../data';
import "../styles/skills.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


class Skills extends Component {
    render() {
        const skillLogo = <FontAwesomeIcon icon={faBoxArchive} />
        const check = <FontAwesomeIcon icon={faArrowRight} />
        return (
            <section id="skills">
                <div className="skills-container">
                    <div className="skills-header">
                        <i>{skillLogo}</i>
                        <h1>Skills/Technologies</h1>
                        <p>The following are technologies I have worked with in the past.
                            I am always willing to learn new technologies as well!</p>
                    </div>
                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div key={skill} className="skill-grid-area">
                                <div className="skill-title">
                                    <i>{check}</i>
                                    <span>{skill}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills