import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import '../style/notification.css'


export default function Notifications() {
  return (
    <>
    <Navbar/>
    <Box height={10} />
    <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p:3 }}>
        <div className='back-notifications'>
        <div className='container' >
          <div className='notification'>
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Optio et consectetur inventore commodi ab est fugit reiciendis labore.</h1>
          </div>
          <div className='notification'>
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Optio et consectetur inventore commodi ab est fugit reiciendis labore.</h1>
          </div>

         </div>
        </div>
       
        </Box>
    </Box>  
    </>
  )
}

