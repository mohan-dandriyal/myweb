
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {

    const navigate = useNavigate()

    const [user, serUser] = useState({
        userId: null,
        password: null
    })

    const hendleUser = () => {
        if (user.userId === null) {
            alert('uaer')
        }
        else if (user.password === null) {
            alert('pass')
        }
        else if (user.userId === localStorage.getItem('UserId')) {
            if (user.password === localStorage.getItem('Pass')) {
                navigate('/desboard')
            }
            else {
                alert('enter valid name and pass')
            }
        }


    }
    return (
        <>
            <div className="box">
                <div className="wrapper">
                    <div className="logo">
                        <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
                    </div>
                    <div className="text-center mt-4 mb-2 name">
                        Singin
                    </div>
                    <form className="p-3 mt-3">
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="email" name="userID" onInput={(e) => serUser((prev) => ({ ...prev, userId: e.target.value }))} id="userId" placeholder="userId" />
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password" name="password" onInput={(e) => serUser((prev) => ({ ...prev, password: e.target.value }))} id="pwd" placeholder="Password" />
                        </div>
                        <button type='button' onClick={hendleUser} className="btn mt-3">Login</button>
                    </form>
                    <div className="text-center fs-6">
                        <Link to='/forget'>Forget password?</Link> or <Link to="/register">Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    );
}