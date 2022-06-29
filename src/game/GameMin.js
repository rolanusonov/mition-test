import React from 'react';
import {Link} from "react-router-dom";


const GameMin = ({el, id}) => {


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
                            <button className="gameBtn">
                                Начать
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameMin;