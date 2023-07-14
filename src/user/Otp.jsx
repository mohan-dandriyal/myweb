import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import * as emailjs from "emailjs-com"

import 'bootstrap/dist/css/bootstrap.css'

export const Otp = () => {

    const naviget = useNavigate()
    const [otp, setOtp] = useState(null);
    const [time, setTime] = useState(30);

    let num = parseInt(otp)
    let chack = parseInt(localStorage.getItem('Otp'))

    console.log(chack);
    const hendleOtp = () => {

        if (num === chack) {
            naviget('/login')
            localStorage.removeItem('Otp');
            // setTime(3000)
        }
        else {
            alert('Enter valid Otp')
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
    return (
        <>
            <div className="box">
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
                            <input type="text" placeholder="enter Otp" className="text-center" onInput={(e) => setOtp(e.target.value)} />
                        </div>
                        <button type="button" onClick={hendleOtp} className="btn mt-3">verify</button>
                    </form>
                    <div className="text-center fs-6">
                        {/* <Link to='/login' >Sign in</Link> */}
                        <button className=" btn h-auto py-1 btn-primary" style={{width: 'fit-content'}} onClick={resendOtp}>Resend OTP</button>
                        <h4 id="num" className={`mt-2 text-center ${time <= 0 && 'visually-hidden'} `} >{time}</h4>
                    </div>
                </div>
            </div>


        </>
    )
}