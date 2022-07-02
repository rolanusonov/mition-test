import React, {useEffect, useState} from 'react';
import adminCris from '../img/Vector.png';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {api} from "../https/api";
import AdminMin from "./AdminMin";

const Admin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/api/v1/admintest/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])


    const {register, handleSubmit, formState: {errors}} = useForm({
        preventDefault: true,
    });

    const onSubmit = data => {
        api.post("/api/v1/admintest/",  {
            email: data.email,
            password:data.password,

        })
            .then(data => {
                navigate('/gameCreateBig')
                toast.success("Успешно отправлено")
            })
            .catch((errors) => {
                toast.error('Ошибка')
            })
    };




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
                                <form onSubmit={handleSubmit(onSubmit)}  >
                                    <div>
                                        <h2 className="adminH2">Логин</h2>
                                        <input   {...register("email", {required: true})} id="idEmail" name="email" className="adminInput"
                                               type="email"
                                               placeholder="email"/>
                                    </div>
                                    <div>
                                        <h2 className="adminH2">Пароль</h2>
                                        <input className="adminInput  ret"   name="password"
                                               {...register("password", {required: true})}
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
