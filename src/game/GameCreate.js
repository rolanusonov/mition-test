import React,{useEffect} from 'react';
 import {useDispatch, useSelector} from "react-redux";
 import {api} from "../https/api";
 import GameMin from "./GameMin";
//
// function timedRefresh(timeoutPeriod) {
//     setTimeout("location.reload(false);",timeoutPeriod);
// }
// window.onload = timedRefresh(10000);
const GameCreate = () => {
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/api/v1/theme/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])
        return (
       <div>
           {
           catalog.map(el => (
               <GameMin el={el} key={el.id}/>
           ))
       }
       </div>
    );
};

export default GameCreate;