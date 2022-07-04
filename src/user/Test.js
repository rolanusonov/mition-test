import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {api} from "../https/api";

const Test = ({el,id}) => {
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api(`/api/v1/question/`)
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])
    console.log(catalog)
    return (
        <div className="names">
            <div className="container">
                {
                    catalog.map(el => (
                        <div key={el.id}>
                            <h1>{el.question_ru}</h1>
                            <h1>{el.option_1_ru}</h1>
                            <h1>{el.option_2_ru}</h1>
                            {el.time_second}
                            <h1>{el.point}</h1>
                            <h1>{el.theme}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Test;
