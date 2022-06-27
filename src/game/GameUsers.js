import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {api} from "../https/api";
import { useParams} from "react-router-dom";
import GamePinCode from "./GamePinCode";

const GameUsers = ({el}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [theme,setTheme] = useState({})
    useEffect(() => {
        api(`/api/v1/theme/${id}`)
            .then(({data}) => {
                setTheme(data)
            })
    }, [])




    return (
        <div className="gameMin">
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div>
                    <div className="gameUsersRod">
                        <div className="gameUsersRods">
                            <div>
                                <div className="gameUsersPin">
                                    <div className="gameUserPinBac">
                                        <h1 className="gameUserPinBacH1">ПИН</h1>
                                    </div>
                                    <h1>{theme?.pin_code}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GamePinCode/>
        </div>
    );
};

export default GameUsers;