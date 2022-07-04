import React,{useEffect} from 'react';
import {useState} from "react";
 import {api} from "../https/api";
import GameMin from "../game/GameMin";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const NamesCards = ({id}) => {
    const [theme,setTheme] = useState({})
    const [user,setUser] = useState([])

    useEffect(() => {
        api(`/api/v1/theme/${id}`)
            .then(({data}) => {
                setTheme(data)
            })
    }, [])
    const res = [];

    user.map((item) =>  {
        theme?.test_participants?.map((el) => {
            if (el === item.id) {
                res.push(item);
            }
        });
    });

    return (
        <div>   <div className="gameMin2">
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div>
                    <div className="gameUsersRod">
                        <div className="gameUsersRods">
                            <div>
                                <div className="gameUsersPin">
                                    <div className="gameUserPinBac">
                                        <h1 className="gameUserPinBacH1">ПИН</h1>
                                    </div>
                                    <h1 className="gamePin">{theme?.pin_code}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {res.length === 0 ?
                <div className="spinner">
                    <div className="lds-grid">
                        <div>   <h1 className="spinnerH1 " >В ожидании игроков...</h1> </div>



                    </div>
                </div>
                :
                <div className="">
                    <div>
                        <div className="gameUserMAr">
                            <h2 className="gameUsersWerH1">Присоединились </h2>
                            <ol>
                                {res.map  (el =>  (
                                    <div key={el.id} className="gameUserJus">
                                        <h1 className="gameUserH1">{el.name}</h1>
                                    </div>
                                ))}
                                <h1 className="gameUserLength">
                                    Игроки:{res?.length}
                                </h1>
                            </ol>
                        </div>

                        <div className="gameUsersName">
                            <Link to="/gameUsersLoading">
                                <button className="gameUsersBtn">
                                    Начать игру
                                </button>


                            </Link>

                        </div>
                    </div>

                </div>
            }
        </div></div>
    );
};

export default NamesCards;