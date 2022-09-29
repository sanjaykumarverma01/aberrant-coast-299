import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from "../Components/login";
import Signin from '../Components/signin';

const AllRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path="/login" element={<Login/>}>

        </Route>
        
        <Route path="/signin" element={<Signin/>}>
          
        </Route>

      </Routes>
    </div>
  )
}

export default AllRoutes
