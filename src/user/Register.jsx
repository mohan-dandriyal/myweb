
// import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import { useState } from 'react';
import * as emailjs from "emailjs-com"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


export const Register = () => {

const  navigate = useNavigate()
    const [userdata, setUserdata] = useState({
        username: null,
        userId: null,
        pass: null
    })

    let otp = Math.ceil(Math.random() * 10000);
   

    const hendleSubmit = () => {
        if (userdata.username === null) {
            alert('enter user name');
        }
        else if (userdata.userId === null) {
            alert('enter userid');
        }
        else if (userdata.pass === null) {
            alert('enter password');
        }
        else{
        
        
        //   var data = {
        //     to_email: userdata.userId,
        //     otp: `verify your email ${otp}`
        // };

        // let userid = "LuvyT0-TVop9UcA5z";
        // let serviceid = "service_64x53ka";
        // let templateid = "template_3rowx0w"

        // emailjs.send(serviceid, templateid, data, userid).then(
        //     function (response) {
        //         console.log(response.status, response.text);
        //         console.log(response);
                navigate('/login')
                // localStorage.setItem('Otp', otp)
                localStorage.setItem('Username', userdata.username)
                localStorage.setItem('UserId', userdata.userId)
                localStorage.setItem('Pass', userdata.pass)
            },
            function (err) {
                console.log(err);
            }
        );
        
        }
    

    }



    return (
        <>
            <div className="box">
            <div className="wrapper">
                <div className="logo">
                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                </div>
                <div className="text-center mt-4 name">
                    Singup
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="Username" onInput={(e) => setUserdata((prev) => ({ ...prev, username: e.target.value }))} />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="email" name="userID" id="userId" placeholder="userId" onInput={(e) => setUserdata((prev) => ({ ...prev, userId: e.target.value }))} />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password" onInput={(e) => setUserdata((prev) => ({ ...prev, pass: e.target.value }))} />
                    </div>
                    <button type='button' onClick={hendleSubmit} className="btn mt-3">Sign up</button>
                </form>
                <div className="text-center fs-6">
                    <Link to='/login' >Sign in</Link>
                </div>
            </div>
            </div>
        </>
    );
}
