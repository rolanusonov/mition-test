import React, {useEffect, useState} from 'react';
import adminCris from '../img/Vector.png';
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {api} from "../https/api";
import AdminMin from "./AdminMin";

const Admin = () => {

    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/api/v1/admintest/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])

    const [user, setUser] = useState({
        email: "",
        password: ""

    })
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className="heroAdmin">
                 <div className="container">
                    <div className="adminModal">
                        <div className="subModal">
                            <Link to="/" className="cris">
                                <img src={adminCris} alt=""/>
                            </Link>

                            <div className="winModal">
                                <form onSubmit={onSubmit}>
                                    <div>
                                        <h2 className="adminH2">Логин</h2>
                                        <input id="idEmail" name="email" onChange={handleChange} className="adminInput"
                                               type="email"
                                               placeholder="email"/>
                                    </div>
                                    <div>
                                        <h2 className="adminH2">Пароль</h2>
                                        <input className="adminInput  ret" onChange={handleChange} name="password"
                                               type="password" placeholder="password"/>
                                    </div>
                                    <button type='submit' className="adminBtn">Войти</button>
                                </form>

                            </div>

                        </div>
                        <div>
                            {
                                catalog.map(el => (
                                    <AdminMin el={el} key={el.id}/>
                                ))
                            }
                        </div>
                    </div>
                </div>


         </div>
    );
};

export default Admin;
