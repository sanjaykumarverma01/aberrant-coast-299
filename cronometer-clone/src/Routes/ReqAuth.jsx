import {Navigate} from "react-router-dom";

import React from 'react'
import { useSelector } from "react-redux";
import { loadData, saveData } from "../Utils/accessLocalStorage";


const ReqAuth = ({children}) => {
    // const token =useSelector((state)=>state.authReducer.token)
    const token=JSON.parse(localStorage.getItem("token"))
    // const token = loadData("token")
    // console.log()

<<<<<<< HEAD
    console.log(token)
=======
    // console.log(token)
>>>>>>> 885ad9b9311e50fe1ed49b8ad4a64ec031097f66

    if(token){
        return children
    }
  return <Navigate to="/login"/>
}

export default ReqAuth