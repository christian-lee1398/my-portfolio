import React from 'react';
import '../styles/contact.css';

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }
    return (
        <section id="contact">
            <div className='contact-container'>
                <div className='map-content'>
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
                    onSubmit={handleSubmit}
                    className='contact-form'>
                    <h2>Hire Me</h2>
                    <p>Please send your information over to me if you are interested in either working with or hiring me for your company</p>
                    <div className='name-entry'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className='email-entry'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className='message-entry'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            type='text'
                            id='message'
                            name='message'
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='submit-button'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )

}

