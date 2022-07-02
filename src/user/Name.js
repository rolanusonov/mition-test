import React from 'react';
import {Link} from "react-router-dom";

const Name = () => {
    return (
        <div className="names">
            <div className="container">
                    <div className="userPin">
                        <input className="userName" type="name" placeholder="name"/>
                          <Link to="">
                              <button className="userBtn">Подтвердить</button>
                          </Link>
                    </div>
            </div>
        </div>
    );
};

export default Name;