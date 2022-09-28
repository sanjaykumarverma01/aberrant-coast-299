// import React from 'react'
// import Dairy from '../Components/AfterLogin/pages/Dairy';
// import Trends from '../Components/AfterLogin/pages/Trends';
// import Plans from '../Components/AfterLogin/pages/Plans';
// import Helps from '../Components/AfterLogin/pages/Helps';
// import Foods from '../Components/AfterLogin/pages/Foods';
// import Settings from '../Components/AfterLogin/pages/Settings';
// import InsideFooter from '../Components/InsideFooter';
// import InsideNavbar from '../Components/InsideNavbar';
// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';



// const Layout =()=>{
//   return (
//     <>
//       <InsideNavbar/>
//       <Outlet/>
//       <InsideFooter/>
//     </>
//   )
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {
//         path:"/",
//         element: <Dairy/>
//       },
//       {
//         path:"/trends",
//         element: <Trends/>
//       },
//       {
//         path:"/foods",
//         element: <Foods/>
//       },
//       {
//         path: "/helps",
//         element: <Helps/>,
//       },
//       {
//         path: "/setting",
//         element: <Settings/>,
//       },
//       {
//         path: "/plans",
//         element: <Plans/>,
//       },
//     ]
//   },
// ]);


// const AllRoutes = () => {
//   return (
//     <RouterProvider router={router}/>
//   )
// }

// export default AllRoutes





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