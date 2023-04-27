import React, { Component } from 'react';
import { projects } from '../data';
import '../styles/projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

class Projects extends Component {
    render() {
        const element = <FontAwesomeIcon icon={faLaptopCode} />
        return (
            <section id="projects">
                <div className="projects-container">
                    <div className="projects-header">
                        <i>{element}</i>
                        <h1>
                            My Projects
                        </h1>
                        <p>
                            These are some projects I have completed throughout my self-learning process.
                            However, I do plan on building much more!
                        </p>
                    </div>
                    <div className="gallery">
                        {projects.map((project) => (
                            <a
                                href={project.link}
                                key={project.image}
                                className="thumbnail-link">
                                <div className="thumbnail">
                                    <img
                                        alt="gallery"
                                        className="proj-img"
                                        src={project.image}
                                    />
                                    <div className="proj-info">
                                        <h2 className="subtitle">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title">
                                            {project.title}
                                        </h1>
                                        <p className="description">{project.description}</p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="live-link">
                                            View project
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="github-link">
                                            View source
                                        </a>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}


export default Projects