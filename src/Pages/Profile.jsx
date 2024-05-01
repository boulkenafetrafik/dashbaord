// import React, { useEffect } from 'react';
// import Sidenav from '../components/Sidenav';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Navbar from '../components/Navbar';
// import '../style/profile.css';

// export default function Profile() {
//   return (
//     <>
//       <Navbar />
//       <Box height={30} />
//       <Box sx={{ display: 'flex' }}>
//         <Sidenav />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <div className="container" id="container">
//             <div className="form-container sign-up">
//               <form>
//                 <h1>Create Account</h1>
//                 <div className="social-icons">
//                   <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
//                   <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
//                   <a href="#" className="icon"><i className="fab fa-github"></i></a>
//                   <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
//                 </div>
//                 <span>or use your email for registration</span>
//                 <input type="text" placeholder="Name" />
//                 <input type="email" placeholder="Email" />
//                 <input type="password" placeholder="Password" />
//                 <button id="register">Sign Up</button>
//               </form>
//             </div>
//             <div className="form-container sign-in">
//               <form>
//                 <h1>Sign In</h1>
//                 <div className="social-icons">
//                   <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
//                   <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
//                   <a href="#" className="icon"><i className="fab fa-github"></i></a>
//                   <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
//                 </div>
//                 <span>or use your email and password</span>
//                 <input type="email" placeholder="Email" />
//                 <input type="password" placeholder="Password" />
//                 <a href="#">Forgot Your Password?</a>
//                 <button id="login">Sign In</button>
//               </form>
//             </div>
//             <div className="toggle-container">
//               <div className="toggle">
//                 <div className="toggle-panel toggle-left">
//                   <h1>Welcome Back!</h1>
//                   <p>Enter your personal details to use all site features</p>
//                   <button className="hidden" id="login">Sign In</button>
//                 </div>
//                 <div className="toggle-panel toggle-right">
//                   <h1>Hello, Friend!</h1>
//                   <p>Register with your personal details to use all site features</p>
//                   <button className="hidden" id="register">Sign Up</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Box>
//       </Box>
//     </>
//   );
// }



import React from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';
import '../style/profile.css';

export default function Profile() {
  return (
    <>
      <Navbar />
      <Box height={20} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='all-profile'>
          <div className='profile'>
            <div className='container'>
              <div className='profile-card'>
                <div className='user-photo'>
                  <img src="" alt="" />

                </div>

                <form action="" class="styled-form">
  <div class="left-section">
    <div class="form-group">
      <label for="firstname">First Name:</label>
      <input type="text" id="firstname" placeholder='First Name' />
    </div>
    <div class="form-group">
      <label for="lastname">Last Name:</label>
      <input type="text" id="lastname" placeholder='Last Name' />
    </div>
    <div class="form-group">
      <label for="birthday">Birthday:</label>
      <input type="text" id="birthday" placeholder='Birthday' />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" placeholder='Password' />
    </div>

  </div>
  <div class="right-section">
    <div class="form-group">
      <label for="gender">Gender:</label>
      <input type="text" id="gender" placeholder='Gender' />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder='Email' />
    </div>
    <div class="form-group">
      <label for="address">Address:</label>
      <input type="text" id="address" placeholder='Address' />
    </div>
    <div class="form-group">
      <label for="password">ConfirmationPassword:</label>
      <input type="password" id="password" placeholder='ConfirmationPassword' />
    </div>
 
  </div>
</form>


              </div>

            </div>

          </div>
        </Box>
      </Box>
    </>
  );
}


