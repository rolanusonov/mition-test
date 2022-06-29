import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";


const GamePinCode = () => {
    let data = new Date()
    console.log(data)
    const [time , setTime] = useState(10)


    const router = useNavigate()
    console.log(router , "router")

    useEffect(() => {
        const start = () => {
            setTimeout(() => {
                setTime(time - 1)
            },1000)
        }

        if (time === 0) {
            setTime(0)
            router("")
        } else {
            start()
        }
    } , [time])

    return (
        <div>
            <div className="Progress">

                <div className="timer">
                    <div className="timerLine">

                    </div>
<div className="timerBody">
    <div className="circleCodeMin" >
        <h1 className="timeH1">{time}</h1>
    </div>
</div>
                </div>

            </div>
        </div>
    );
};

export default GamePinCode;