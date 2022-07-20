import React from 'react';
import {Link} from "react-router-dom";
import {api} from "../https/api";
import {toast} from "react-toastify";


const GameMin = ({el, id}) => {

    const onSubmit = data => {
        api.post("/api/v1/theme/", {
            is_start: true
        })
            .then(data => {
                toast.success("Успешно отправлено")
            })
            .catch((errors) => {
                toast.error('Ошибка')
            })
    };

    return (
        <div className="">
            <div className="container">
                <div className="gameBig">
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div className="gameMinJus">
                            <h3 className="gameMinH30">{el.title_ru}</h3>
                            <div className="minPin">
                                <h3 className="gameMinH31">Количество воп.&nbsp; {el.count_question}</h3>
                            </div>
                        </div>
                        <Link to={`/theme/${el.id}`}>
                            <form action="" onSubmit={onSubmit}>
                                <button className="gameBtn" type="submit">
                                    Начать
                                </button>
                            </form>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameMin;