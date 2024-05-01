import React from 'react'
import './App.css'
import Sidenav from './components/Sidenav'
// import { Routes,Route,BrowserRouter, Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Notifications from './Pages/Notifications'
import Profile from './Pages/Profile'
import Setting from './Pages/Setting'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Sidenav/>
      <Outlet/>

    </>
  )
}

export default App

      {/* <BrowserRouter>
        <Routes>
           <Route path="/" exact element={<Profile/>}></Route>
          <Route path="/Notifications" exact element={<Notifications/>}></Route>
          <Route path="/Setting" exact element={<Setting/>}></Route> 

        </Routes>
      </BrowserRouter> */}