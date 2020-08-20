import React from 'react';
import "./Contact.css";
import linkedin from './images/linkedin.svg';
import twitter from './images/twitter.svg';
import instagram from './images/instagram.svg';
import github from './images/github.svg';

function Contact() {
    return (
        <div className="form" id="sec5">
            <div className="gheading1">
            Contact <b>Me</b>
            </div>
            <div classNam="form_details">
                <div className="name1">
                    <input type='text' placeholder="Name"  className="entry" />     
                </div>
                <div className="name1">
                    <input type='text' placeholder="Email" className="entry" />     
                </div>
                <div className="name1">
                    <input type='text' placeholder="Subject" className="entry" />     
                </div>
                <div className="name1">
                    <input type='text' placeholder="Message" className="entry" />     
                </div>
                <button className="button">
                    Send Message
                </button>
            </div>
            <div className="social">
                <div>
                <a href="https://www.linkedin.com/in/aryan-verma-96a306186/">
                    <img src={linkedin} alt="" className="size" /></a>
                </div>
                <div>
                <a href="https://twitter.com/AryanVe59643688">
                    <img src={twitter} alt="" className="size" /></a>
                </div>
                <div>
                <a href="https://www.instagram.com/aarynverma_/">    
                <img src={instagram} alt="" className="size" /></a>
                </div>
                <div>
                <a href="https://github.com/aarynverma">    
                <img src={github} alt="" className="size" /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;