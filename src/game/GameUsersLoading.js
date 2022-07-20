 import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const GameUsersLoading = () => {
    let data = new Date()
     const [time , setTime] = useState(11)
    const router = useNavigate()

    useEffect(() => {
        const start = () => {
            setTimeout(() => {
                setTime(time - 1)
            },1000)
        }
        if (time === 0) {
            setTime(0)
            router("/pin")
        } else {
            start()
        }
    } , [time])

    return (
        <div>
            <div className="Progress">
                <div className="progress">
                    <div className="progressBac"></div>
                </div>
                <h1 className="progressH1">Идёт загруска</h1>
                <h1 className="timeLoading">{time}</h1>
            </div>
        </div>

    );
};

export default GameUsersLoading;