import React from 'react';
import './Skills.css';
import illustrator from './images/illustrator.svg';
import html5 from './images/html5.svg';
import css3 from './images/css3.svg';
import ae from './images/ae.svg';
import java from './images/java.svg';
import react from './images/react.svg';

function Skills() {
    return (
        <div className="skills" id="sec4">
            <div className="description">
                My <b>Skills</b>
            </div>
            <div className="des">
            I am a great communicator. I can present my ideas well in-person,
            in writing and through social media. I've worked hard to sharpen
            those skills because I feel that the value of a great idea is lost if I
            can't present it in a way that others can understand.
            </div>
            <div className="files">
                <div className="folder">
                    <div className="f1">
                    <img src={illustrator} alt="" className="me1"/>
                        <div><b><u>Illustrator</u></b></div>
                    </div>
                    
                    <div className="f2">
                    <img src={html5} alt="" className="me2"/>
                        <div><b><u>HTML 5</u></b></div>
                    </div>
                </div>
                <div className="folder2">
                    <div className="f1">
                    <img src={css3} alt="" className="me3"/>
                    <div> &nbsp;&nbsp;&nbsp;<b><u> CSS 3</u></b></div>
                    </div>
                    <div className="f2">
                    <img src={ae} alt="" className="me4"/>
                        <div className="name">&nbsp;<b><u>After Effects</u></b></div>
                    </div>
                </div>
                <div className="folder3">
                
                    <div className="f1">
                    <img src={java} alt="" className="me5"/>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;<b><u>Java</u></b></div>
                    </div>
                    <div className="f2">
                    <img src={react} alt="" className="me6"/>
                    <div>&nbsp;&nbsp;&nbsp;<b><u>React</u></b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
