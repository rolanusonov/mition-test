import React from 'react';
import {api} from "../https/api"
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {useForm} from "react-hook-form";

const User = () => {
    
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({
        preventDefault: true,
    });

    const onSubmit = data => {
        api.post("/api/v1/user/", {
            pin_code: data.pin_code,
            name: data.name,
        })
            .then(data => {
                toast.success("Успешно отправлено")
                navigate('')
            })
            .catch((errors) => {
                toast.error('Ошибка')
            })
    };


    return (
        <div className="userFon">
            <div className="container">
                <ToastContainer/>
                <div className="userMar">
                    <form className="userPin" onSubmit={handleSubmit(onSubmit)}>
                        <input className="userInput"   {...register("pin_code", {required: true})} type="password"
                               placeholder="PIN-код игры"/>
                        <input className="userInput"   {...register("name", {required: true})} type="name"
                               placeholder="Nickname"/>
                        <button type="submit" className="userBtn">Подтвердить</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default User;

export class catalog {
}