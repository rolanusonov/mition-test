import React from 'react';
import GameCreate from "./GameCreate";


const GameCreateBig = () => {

    return (
        <div className="gameMin">
            <div className="container">
                <h1 className="gameMinH1">Тесты</h1>
                <div>
                    <GameCreate/>
                </div>
            </div>
        </div>
    );
};

export default GameCreateBig;