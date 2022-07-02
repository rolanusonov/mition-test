import React,{useEffect} from 'react';
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {api} from "../https/api"
import UserMini from "./UserMini";
import {Link} from "react-router-dom";
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
                <div className="">
                    <div className="userPin">
                        <input className="userInput" type="password" placeholder="PIN-код игры"/>
                     <Link to="">
                         <button className="userBtn">Подтвердить</button>
                     </Link>
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