import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dairy from '../Components/AfterLogin/pages/Dairy'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dairy/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
