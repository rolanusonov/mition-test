import React from 'react';
import {api} from "../https/api";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";


const Name = () => {

    const onSubmit = data => {

        const dataBasket = {
            name: data.name,
            pin_code: data.pin_code,
        }

        api.post("api/v1/user/", dataBasket)
            .then(() => {
                toast.success("Успешно отправлено")
            })
            .catch((errors) => {
                toast.error('Ошибка')
            })
    };
    const {register, handleSubmit, formState: {errors}} = useForm({
        preventDefault: true,
    });

    function validate() {
        let a = document.forms["myForm"]["name"].value;
        if (a === "") {
            alert("Укажите ваше имя");
            return false;
        }
        let b = document.forms["myForm"]["pin"].value;
        if (b === "") {
            alert("Укажите вашу фамилию");
            return false;
        }}

    return (
        <div className="names">
            <div className="userPin ">
                <form method="post" onSubmit={handleSubmit(onSubmit)} className="formDis">
                    <ToastContainer/>
                    <input type="text" data-rule="string" name="name" size="90" maxLength="50"
                           defaultValue="" {...register("name", {required: true})} className="userName"/>
                    <input type="password" data-rule="number" name="pin" size="90" maxLength="50"
                           defaultValue="" {...register("pin_code", {required: true})} className="userInput"/>
                    <Link to="/">
                        <input type="submit" name="btnRunProccess" defaultValue="Отправить" className="userBtn"/>
                    </Link>
                </form>
                <form name="myForm" onSubmit="return validate()"/>

            </div>

        </div>
    );
};

export default Name;