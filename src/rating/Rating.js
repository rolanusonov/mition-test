import React, {useEffect, useState} from 'react';
import {api} from "../https/api";


const Rating = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        api(`/api/v1/user/`)
            .then(({data}) => {
                setUser(data)
            })
    }, [])


    return (
        <div className="names">
            <div className="container">
                <div className="ratingHGg">
                    <div className="ratingRD">
                        <h1 className="ratingR">Рейтинг</h1>
                    </div>
                    <div>
                        {users.map(el => (
                            <div key={el.id} className="ratingD">
                                <h1 className="ratingH1">{el.name}</h1>
                                <h1 className="ratingH1">{el.point}</h1>
                            </div>
                        ))}
                    </div>
                    <div className="ratingBTN">
                        <div></div>
                        <button className="ratingBtn">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rating;