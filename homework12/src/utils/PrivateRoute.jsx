import React from 'react';
import {Outlet,Navigate} from 'react-router';
import {useSelector} from 'react-redux';

export const PrivateRoute = ({redirectPath='/login',children}) =>{
    const token = useSelector(state=>state.authReducer.token)

    if(!token){
        return <Navigate to={redirectPath}/>
    }
    return children ? children : <Outlet/>
}