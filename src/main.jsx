import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Notifications from './Pages/Notifications.jsx';
import Profile from './Pages/Profile.jsx';
import Setting from './Pages/Setting.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {path:"/profile",element:<Profile/>},
      {path:"/Notifications",element:<Notifications/>},
      {path:"/Setting",element:<Setting/>}

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />

)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

