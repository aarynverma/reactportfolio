import React from 'react';
import './Aboutme.css';
import me from './images/me.jpeg';
import logo from './images/logo.png';

function About() {
    return (
        <div className="about" id="sec3">
            <div className="aboutme">
                <div> <img src={me} alt="" className="me"/></div>
                <div className="details">
                    <div className="description">
                    About <b>Me</b>   
                    </div>
                    <div className="des">
                        <b>Hi I'm Aryan Verma</b> I am computer science undergraduate 
                        student from Indore, India. I am a tech-enthusiast and I am 
                        always on my mission to learn something new every day.

                        I also actively take part in developer community activities
                        by attending and organising community events in Indore.
                        I like working on open-source projects and contributing
                        to great pieces of work. It also enables me to interact
                        with the community in a way and play my role in it.
                    </div>
                </div>
            </div>
            <div className="elements">
                    <div className="element1">
                       <u>UI/UX Designer</u>
                    </div>
                    <div className="element2">
                        <img src={logo} alt="" className="element4" />
                    </div>
                    <div className="element3">
                        <u>Web Developer</u>
                    </div>
            </div>
        </div>
        
    );
}

export default About;