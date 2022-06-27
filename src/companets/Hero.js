import React from 'react';
import nout from '../img/Мокап.png';
import {NavLink} from 'react-router-dom';
const Hero = () =>{
    return (
        <div className="heroFon">
            <div className="container">
                <div className="Hero">
                    <div style={{display: "flex", flexDirection: "column", margin: "50px"}}>
                        <img style={{zIndex:"1"}} src={nout} alt=""/>
                        <div className="hero"></div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "40px"}}>
                            <NavLink to="/user" className="heroBtn">
                                <h3>Подключиться </h3>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;