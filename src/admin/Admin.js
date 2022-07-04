import React, {useEffect, useState} from 'react';
import adminCris from '../img/Vector.png';
import {Link, useNavigate} from "react-router-dom";
 import {useDispatch, useSelector} from "react-redux";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getUser} from "../reducer/action";

const Admin = () => {
    const [email, setEmail] = useState("")
    const [password ,setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
            dispatch(getUser())
    }, [])


    const get = () => {
        if (catalog.email === email && catalog.password === password){
            navigate("/gameCreateBig")
        }else {
            alert("error")
        }
    }


    return (
        <div className="heroAdmin">
                 <div className="container">
                     <ToastContainer/>
                    <div className="adminModal">
                        <div className="subModal">
                            <Link to="/" className="cris">
                                <img src={adminCris} alt=""/>
                            </Link>

                            <div className="winModal">

                                <form >
                                    <div>
                                        <h2 className="adminH2">Логин</h2>
                                        <input id="idEmail" name="email" className="adminInput"
                                               type="email"
                                               onChange={(e) => setEmail(e.target.value)}
                                               placeholder="email"/>
                                    </div>
                                    <div>
                                        <h2 className="adminH2">Пароль</h2>
                                        <input className="adminInput  ret"  name="password"
                                               onChange={(e) => setPassword(e.target.value)}
                                               type="password" placeholder="password"/>
                                    </div>
                                         <button  onClick={() => get()} className="adminBtn">Войти</button>
                                 </form>


                            </div>
                        </div>
                        <div>
                            <h1>{catalog.email}</h1>
                            <h1>{catalog.password}</h1>
                        </div>
                    </div>
                </div>


         </div>
    );
};

export default Admin;
