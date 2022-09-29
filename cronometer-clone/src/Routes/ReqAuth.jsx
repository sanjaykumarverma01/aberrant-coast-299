import {Navigate} from "react-router-dom";

import React from 'react'
import { useSelector } from "react-redux";

const ReqAuth = ({children}) => {
    const token =useSelector((state)=>state.authReducer.token)

    if(token){
        return children
    }
  return <Navigate to="/login"/>
}

export default ReqAuth