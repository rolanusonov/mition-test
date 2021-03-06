import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Admin from "../admin/Admin";
import User from "../user/User";
import Header from "../companets/Header";
import Hero from "../companets/Hero";
import GameCreateBig from "../game/gameCreateBig";
import GameUsers from "../game/GameUsers";
import GameUsersLoading from "../game/GameUsersLoading";
import GamePinCode from "../game/GamePinCode";
import Name from "../user/Name"
import NamesCards from "../user/NamesCards"
import Rating from "../rating/Rating";
import RatingMen from "../rating/RatingMen";
import Test from "../user/Test"
import Time from "../home/Time"


const Home = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/gameCreateBig" element={<GameCreateBig/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/gameUsersLoading" element={<GameUsersLoading/>}/>
                <Route path="/theme/:id" element={<GameUsers/>}/>
                <Route path="/rating" element={<Rating/>}/>
                <Route path="/ratingmen" element={<RatingMen/>}/>
                <Route path="/pin" element={<GamePinCode/>}/>
                <Route path="/Name" element={<Name/>}/>
                <Route path="/question" element={<Test/>}/>
                <Route path="/NamesCards" element={<NamesCards/>}/>
                <Route path="/time" element={<Time/>}/>
            </Routes>
        </div>
    );
};

export default Home;