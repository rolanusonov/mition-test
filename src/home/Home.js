import React from 'react';
  import  {Routes,Route} from 'react-router-dom';
import Admin from "../admin/Admin";
import User from "../user/User";
 import Header from "../companets/Header";
import Hero from "../companets/Hero";
import PrivateRoute from "../pages/PrivatRoute";
import GameCreateBig from "../game/gameCreateBig";
import GameUsers from "../game/GameUsers";
import GameUsersLoading from "../game/GameUsersLoading";
import GamePinCode from "../game/GamePinCode";

const Home = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/gameCreateBig" element={<PrivateRoute><GameCreateBig/></PrivateRoute>}/>
                <Route path="/user" element={<User/>} />
                <Route path="/GameUsersLoading" element={<GameUsersLoading/>} />
                <Route path="/user/detail/:id" element={<GamePinCode/>} />
                <Route path="/theme/:id" element={<GameUsers/>} />

            </Routes>

        </div>
    );
};

export default Home;