import React, { Component } from 'react';
import '../styles/contact.css';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className='contact-container'>
                    <div className='contact-content'>
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="map-display"
                            style={{ filter: "opacity(0.7)" }}
                            src="https://www.google.com/maps/embed/v1/place?q=Farmingdale,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        />
                        <div className='map-info-container'>
                            <div className='map-address'>
                                <h2>
                                    ADDRESS
                                </h2>
                                <p>
                                    38 Hudson Street<br></br>Farmingdale, NY 11735
                                </p>
                            </div>
                            <div className='map-contact-info'>
                                <h2>EMAIL</h2>
                                <a>christian.lee1398@gmail.com</a>
                                <h2>PHONE</h2>
                                <p>603-732-3669</p>
                            </div>
                        </div>
                    </div>
                    <form
                        netlify
                        name='contact'
                        className='contact-form'>
                        <h2>Hire Me</h2>
                        <p>Please send your information over to me if you are interested in either working with or hiring me for your company</p>
                        <div className='name-entry'>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                            ></input>
                        </div>
                        <div className='email-entry'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                            ></input>
                        </div>
                        <div className='message-entry'>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                type='text'
                                id='message'
                                name='message'
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='submit-button'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact;