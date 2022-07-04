import React,{useEffect} from 'react';
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {api} from "../https/api"
import UserMini from "./UserMini";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {useForm} from "react-hook-form";
 const User = () => {
     const navigate = useNavigate()
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/api/v1/theme/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])


     const {register, handleSubmit, formState: {errors}} = useForm({
         preventDefault: true,
     });

     const onSubmit = data => {
         api.post("/api/v1/user/",  {
             pin_code:data.pin_code,
             name: data.name,
         })
             .then(data => {
                  toast.success("Успешно отправлено")
                 navigate('/NamesCards')
             })
             .catch((errors) => {
                 toast.error('Ошибка')
             })
     };


     return (
        <div className="userFon">
            <div className="container">
                <ToastContainer/>
                <div>
                        <form  className="userPin"  onSubmit={handleSubmit(onSubmit)} >
                            <input className="userInput"   {...register("pin_code", {required: true})} type="password" placeholder="PIN-код игры"/>
                            <input className="userInput"   {...register("name", {required: true})} type="name" placeholder="Nickname"/>
                                <button type="submit" className="userBtn">Подтвердить</button>
                        </form>
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