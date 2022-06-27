import React from 'react';
import  {Navigate } from "react-router-dom";

class PrivateRoute extends React.Component  {


     render() {
        let {children} = this.props;
        let isAuth = true

        return (


            isAuth ? children : <Navigate to="/admin"/>


        );
    }
}

export default PrivateRoute;