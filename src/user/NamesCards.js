import React,{useEffect} from 'react';
import {useState} from "react";
 import {api} from "../https/api";

const NamesCards = ({id}) => {
    const [theme,setTheme] = useState({})
    console.log(theme,"rila")
    useEffect(() => {
        api(`/api/v1/theme/${id}`)
            .then(({data}) => {
                setTheme(data)
            })
    }, [])
    return (
        <div>
            <h1 className="gamePin">{theme?.pin_code}</h1>


        </div>
    );
};

export default NamesCards;