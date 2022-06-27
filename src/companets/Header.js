import React from 'react';
import logo from '../img/MOTION TEST.png';
import logo0 from '../img/image 5.png';
 import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="HEADER">
            <div className="container">
                <div className="header">
                    <Link to="/admin">
                        <div className="logo">
                            <img src={logo0} alt=""/>
                            <img src={logo} alt=""/>
                        </div>
                    </Link>



                    <div>
                        <select name="" id="" className="language">
                            <option value=""> fc</option>
                            <option value="">2</option>
                            <option value="">2</option>
                            <option value="">2</option>
                            <option value="">2</option>
                            <option value="">2</option>
                            <option value="">2</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header