import './App.css';
import { useEffect, Fragment, useState } from 'react';
import { Routers } from './router/Route';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Register } from './user/Register';
import { Login } from './user/Login';
import { Otp } from './user/Otp';
import { ForgetPassword } from './user/ForgetPassword';
import { Header } from './layout/Header';
import { Error } from './error/Error';

function App() {

   const naviget = useNavigate();
   const location = useLocation();

   useEffect(() => {
      if (location.pathname === "/myweb" || location.pathname === "/" || location.pathname === "*" ) {
         naviget("/login")
      }
   }, [])

   const gotoLogin = () => {
      return (
         <>

            <Routes>
               <Route path="/otp" element={<Otp />} />
               <Route path="/register" element={<Register />} />
               <Route path="/forget" element={<ForgetPassword />} />
               <Route path="/login" element={<Login />} />
               {/* <Route path='*' element={<Error />} /> */}
            </Routes>
         </>
      );
   }

   return (
      <Fragment>
         {
            location.pathname === "" ||
               location.pathname === "/otp" ||
               location.pathname === "/login" ||
               location.pathname === "/forget" ||
               location.pathname === "/register" ||
               // location.pathname === "*" ||
               location.pathname === "/" ? (
               gotoLogin()
            ) :
               <div className="container-fluide">
                  <Header />
                  <div className="App container">
                     <Routers />
                  </div>
               </div>
         }
      </Fragment>
   );
}

export default App;
