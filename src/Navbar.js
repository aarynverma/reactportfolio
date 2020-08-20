import React from "react";
import "./Navbar.css";
import header from './images/header.png';


function Navbar() {
    return (
        <div className="header" id="sec1">
            <div className="nav">
                <div className="navs"><a href="#sec1" id="col">HOME</a></div>
                <div className="navs"><a href="#sec2" id="col">GALLERY</a></div>
                <div className="navs"><a href="#sec3" id="col">ABOUT ME</a></div>
                <div className="navs"><a href="#sec4" id="col">SKILLS</a></div>
                <div className="navs"><a href="#sec5" id="col">CONTACT ME</a></div>
            </div>
            <img src={header} alt="" className="header1"/>
            <div className="first">
                <div className="second">Hello I'm</div>
                <div className="third"><b>Aryan Verma</b></div>
                <div className="fourth">UI/UX/Designer</div>
            </div>
        </div>
    )
}

export default Navbar;