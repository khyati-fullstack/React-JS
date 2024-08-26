import React from 'react'
import Login from './Extracom/Login';
import Profile from './Extracom/Profile';

export default function Jsxexp5() {
    const islogin = true;
    let element;

    if (islogin){
        element = <Profile/>;
    }
    else {
        element = <Login/>;
    }
    return element;
}
