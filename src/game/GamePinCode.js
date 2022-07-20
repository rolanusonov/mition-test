import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";


const GamePinCode = ({el}) => {
    let data = new Date()
    const [time, setTime] = useState(3)


    const router = useNavigate()
    useEffect(() => {
        const start = () => {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }

        if (time === 0) {
            setTime(0)
            router(`/question`)
        } else {
            start()
        }
    }, [time])

    return (
        <div>
            <div className="Progress">
                <div className="timer">
                    <div className="timerLine"></div>
                    <div className="timerBody">
                        <div className="circleCodeMin">
                            <h1 className="timeH1">{time}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePinCode;