import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from "../Components/login";
import Signin from '../Components/signin';
import Dairy from "../Components/AfterLogin/pages/Dairy"
import Helps from "../Components/AfterLogin/pages/Helps"
import Foods from "../Components/AfterLogin/pages/Foods"
import Plans from "../Components/AfterLogin/pages/Plans"
import Settings from "../Components/AfterLogin/pages/Settings";
import Trends from "../Components/AfterLogin/pages/Trends"
const AllRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/dairy" element={<Dairy/>}/>
        <Route path="/trends" element={<Trends/>}/>
        <Route path="/foods" element={<Foods/>}/>
        <Route path="/setting" element={<Settings/>}/>
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/Helps" element={<Helps/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes