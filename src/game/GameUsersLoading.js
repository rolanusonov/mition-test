 import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const GameUsersLoading = () => {
    let data = new Date()
    console.log(data)
    const [time , setTime] = useState(11)


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
            router("/pin")
        } else {
            start()
        }
    } , [time])

    return (
        <div>
            <div className="Progress">
                <div className="progress">
                    <div className="progressBac">

                    </div>
                </div>
                <h1 className="progressH1">
                    Идёт загруска
                </h1>
             </div>

            <h1 className="">{time}</h1>
        </div>

    );
};

export default GameUsersLoading;