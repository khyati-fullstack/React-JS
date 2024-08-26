import React from 'react'
import Profile from './Extracom/Profile';
import Login from './Extracom/Login';

export default function Jsxexp4() {
    const islogin = true;

    if (islogin){
        return <Profile/>;
    }
    else {
        return <Login/>;
    }
}
