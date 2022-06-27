import React,{useEffect} from 'react';
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {api} from "../https/api"
import UserMini from "./UserMini";
 const User = () => {
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/api/v1/theme/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])
     return (
        <div className="userFon">
            <div className="container">
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div className="userPin">
                        <input className="userInput" type="password" placeholder="PIN-код игры"/>
                        <button className="userBtn">Подвердить</button>
                    </div>
                </div>

                <div className="userCont">
                    <div className="userCircle">
                    </div>
                    <div className="userTriangle">
                    </div>
                </div>
                {
                    catalog.map(el => (
                        <UserMini el={el} key={el.id}/>
                    ))
                }
            </div>

        </div>
    );
};

export default User;

export class catalog {
}