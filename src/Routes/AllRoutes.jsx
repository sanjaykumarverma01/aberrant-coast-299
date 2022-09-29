import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dairy from '../Components/AfterLogin/pages/Dairy'

const AllRoutes = () => {
  return (
    <div>
      <h1>nothing showing on screen</h1>
      <Routes>
        <Route path="/" element={<Dairy/>}/>
        <Route/>
        <Route/>
      </Routes>
    </div>
  )
}

export default AllRoutes
