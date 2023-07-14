import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import * as emailjs from "emailjs-com"


export const ForgetPassword = () => {

    const navigate = useNavigate();
    // const [otp, setOtp] = useState(null);
    const [time, setTime] = useState(30);

    const [toggle, setToggle] = useState('email');
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState(null);
    const [forgetPass, setForgetPass] = useState(null);

    let onetimePassword = Math.ceil(Math.random() * 10000)

    // -------------- varify email address ------------
    const hendleEmeil = () => {
        if (user === null) {
            alert('enter email id')
        }
        else if (user === localStorage.getItem('UserId')) {
           
            var data = {
                to_email: localStorage.getItem('UserId'),
                otp: `plase conform the otp ${onetimePassword} and create new password`
            };

            let userid = "LuvyT0-TVop9UcA5z";
            let serviceid = "service_64x53ka";
            let templateid = "template_3rowx0w"

            emailjs.send(serviceid, templateid, data, userid).then(
                function (response) {
                    console.log(response.status, response.text);
                    console.log(response);
                    localStorage.setItem('Otp', onetimePassword)
                    document.getElementById('email').value = ''
                    setToggle('otp')
                    setTimeout(timer, 1000);
                },
                function (err) {
                    console.log(err);
                }
            );
        }
        else {
            alert('enter valid email')
        }
        
    }


    // --- hendle otp -------------
    const hendleOtp = () => {
        if (otp === localStorage.getItem('Otp')) {
            setToggle('pass')
            document.getElementById('otp').value = null;
            localStorage.removeItem('Otp')
        }
        else {
            alert('enter valid email')
        }
        
    }



    const timer = () => {
        if (time > 0) {
            setTime(time - 1);
        }
        else if(time  == 0){
            localStorage.removeItem('Otp');
        }
    }

    useEffect(() => {
        let getotp = localStorage.getItem('Otp')
        if(getotp === null) {
        }
        else{
            setTimeout(timer, 1000);
        }
    }, [time])

    const resendOtp = () => {
        let otps = Math.ceil(Math.random() * 10000);
        var data = {
            to_email: localStorage.getItem('UserId'),
            otp: `enter this otp ${otps}`,
            // messge: 'your one time password'
        };

        let userid = "LuvyT0-TVop9UcA5z";
        let serviceid = "service_64x53ka";
        let templateid = "template_3rowx0w"

        emailjs.send(serviceid, templateid, data, userid).then(
            function (response) {
                console.log(response.status, response.text);
                console.log(response);
                localStorage.setItem('Otp', otps)
                setTime(30)
            },
            function (err) {
                console.log(err);
            }
        );
    }



    // ---------- change password ----------
    const forgetPAssword = () => {
        if (forgetPass === null) {
            alert('entre')
        }
        else if (forgetPass < 6) {
            alert('lle')
        }
        else {
            localStorage.setItem('Pass', forgetPass)
            localStorage.removeItem('Otp');
            navigate('/login')
        }
    }



    return (
        <>
            <div className="box">
                {
                    toggle === 'email' ?
                        <>
                            <div className="wrapper">
                                <div className="logo">
                                    <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                                </div>
                                <div className="text-center mt-4 mb-2 name">
                                    verify email
                                </div>
                                <form className="p-3 mt-3">
                                    <div className="form-field d-flex align-items-center">
                                        <span className="far fa-user"></span>
                                        <input type="email" placeholder="enter email id" id="email" onInput={(e) => setUser(e.target.value)} />
                                    </div>
                                    <button type="button" onClick={hendleEmeil} className="btn mt-3">verify</button>
                                </form>
                                <div className="text-center fs-6">
                                    <Link to='/login' >Sign in</Link>
                                </div>
                            </div>
                        </>
                        :
                        toggle === 'otp' ?
                            <>
                                <div className="wrapper">
                                    <div className="logo">
                                        <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                                    </div>
                                    <div className="text-center mt-4 mb-2 name">
                                        verify OTP
                                    </div>
                                    <form className="p-3 mt-3">
                                        <div className="form-field d-flex align-items-center">
                                            <span className="far fa-user"></span>
                                            <input type="text" placeholder="enter Otp " onInput={(e) => setOtp(e.target.value)} id="otp" />
                                        </div>
                                        <button type="button" onClick={hendleOtp} className="btn mt-3">verify</button>
                                    </form>
                                    <div className="text-center fs-6">

                                        <button className=" btn h-auto py-1 btn-primary" style={{ width: 'fit-content' }} onClick={resendOtp}>Resend OTP</button>
                                        <h4 id="num" className={`mt-2 text-center ${time <= 0 && 'visually-hidden'} `} >{time}</h4>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="wrapper">
                                    <div className="logo">
                                        <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                                    </div>
                                    <div className="text-center mt-4 mb-2 name">
                                        verify password
                                    </div>
                                    <form className="p-3 mt-3">
                                        <div className="form-field d-flex align-items-center">
                                            <span className="far fa-user"></span>
                                            <input type="text" placeholder="Create Password" onInput={(e) => setForgetPass(e.target.value)} />
                                        </div>
                                        <button onClick={forgetPAssword} type="button" className="btn mt-3">verify</button>
                                    </form>
                                    <div className="text-center fs-6">
                                        <Link to='/login' >Sign in</Link>
                                    </div>
                                </div>
                            </>
                }
            </div>
        </>
    );
}