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
                        <div className='map-address-container'>
                            <div className='map-address-content'>
                                <h2>
                                    ADDRESS
                                </h2>
                                <p>
                                    38 Hudson Street<br></br>Farmingdale, NY 11735
                                </p>
                            </div>
                            <div className='map-address-info'>
                                <h2>EMAIL</h2>
                                <a>christian.lee1398@gmail.com</a>
                                <h2>PHONE</h2>
                                <p>603-732-3669</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;