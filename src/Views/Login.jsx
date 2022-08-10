import React from 'react'
import "./login.css"
import config from '../config';
import { useContext, useRef } from 'react';
import axios from "axios"
import { Context } from '../compnents/context/Context';


const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(`${config.testURL}/login`, {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            res.data && window.location.replace("/patient");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    };
    return (
        <div>
            <div className='backgroundimg2'>
                <div className='login_form'>

                    <div className='form_holder'>
                        <div className='form_space'></div>
                        <div className='signup_form'>
                            <form className='adminlogin_form' >
                                <h2 style={{ textAlign: "center" }} className="adminlogin_title">Admin Login</h2>
                                <div className="form-row">
                                    <div className="form-group form-edit">

                                        <input type="email" className="form-control input-edit" id="inputAddress" ref={userRef} placeholder="Email Address"></input>
                                    </div>
                                    <div className="form-group">

                                        <input type="password" className="form-control" id="inputPassword4" ref={passwordRef} placeholder="Password"></input>
                                    </div>
                                </div>



                                <button type="submit" className="btn btn-primary admin-btn" onClick={handleSubmit} disabled={isFetching}>Login</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login