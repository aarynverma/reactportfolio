import React from 'react';
import "./Gallery.css";
import one from './images/one.jpg';
import two from './images/two.jpeg';
import three from './images/three.jpeg';
import four from './images/four.jpg';
import five from './images/five.jpeg';
import six from './images/six.jpeg';

function Gallery() {
    return (
        <div className="gallery" id="sec2">
                <div className="gheading">
                  
                        My <b className="h2">Gallery</b>
                </div>
                <div className="photos">
                   <div className="seta">
                    <div> <img src={one} alt="" className="pic1"/></div>
                    <div><img src={two} alt="" className="pic2"/></div>
                    <div><img src={three} alt="" className="pic1"/></div>
                    </div>
                   <div className="setb">
                    <div><img src={four} alt="" className="pic3"/></div>
                    <div><img src={five} alt="" className="pic4"/></div>
                    <div><img src={six} alt="" className="pic5"/></div>
                   </div>             
                </div>
            </div>  
    );
}

export default Gallery;