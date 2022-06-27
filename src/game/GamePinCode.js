import React from 'react';
import {useState,useEffect} from "react";
import {api} from "../https/api";
import {useParams} from "react-router-dom";

const GamePinCode = () => {

    const {id} = useParams()
    const [user, setUser] = useState({})


    useEffect(() => {
        api(`/api/v1/user/detail/${id}`)
            .then(({data}) => {
                setUser(data)
            })
    }, [])

    return (
        <div>
            <div >
                <div className="gameUsersWer">
                    <h2 className="gameUsersWerH1">Присоединились </h2>
                    <ol>
                        {user?.name}
                    </ol>
                </div>

                <div className="gameUsersName">

                    <button className="gameUsersBtn">
                        Начать игру
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GamePinCode;