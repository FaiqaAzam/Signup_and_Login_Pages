import React from 'react';
import google from 'C:/Users/faiqa/OneDrive/Desktop/Projects/signup/src/images/google.png';
import facebook from 'C:/Users/faiqa/OneDrive/Desktop/Projects/signup/src/images/facebook.png';
import userSolid from 'C:/Users/faiqa/OneDrive/Desktop/Projects/signup/src/userSolid.svg';
import envelopeSolid from 'C:/Users/faiqa/OneDrive/Desktop/Projects/signup/src/envelopeSolid.svg';
import lockSolid from 'C:/Users/faiqa/OneDrive/Desktop/Projects/signup/src/lockSolid.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Signup(props) {
    return (
        <div className='container block'>
            <div className='row'>
                <div className='col-md-6 col-sm-12 layout text-center'>
                    <h2 className='welcome'>{props.welcome}</h2>
                    <p className='personal'>To keep connected with us please login with your personal info</p>
                    <Link to="/signup"><button type="button" className='btn leftsign'>SIGN IN</button></Link>
                </div>

                <div className='col-md-6 text-center'>
                    <h2 className='account'>{props.create}</h2>
                    <img src={userSolid} alt="user" className='user' />
                    <input type="text" className="form-control create" id="username" placeholder="Username" />

                    <img src={envelopeSolid} alt="user" className='user email' />
                    <input type="email" className="form-control create" id="email" placeholder="Email" />

                    <img src={lockSolid} alt="user" className='user' />
                    <input type="password" className="form-control create" id="password" placeholder="Password" />

                    <input className="form-check-input check" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label me" htmlFor="flexCheckDefault">
                            Remember Me
                        </label>

                        <button type="button" className='btn signup'>SIGN UP</button>

                        <p className='social'>or Connect with Social Media</p>
                        <button type="button" className='btn btn-outline-primary facebook'><img src={facebook} alt="facebook" className='width'/>Facebook</button>
                        <button type="button" className='btn btn-outline-danger google'><img src={google} alt="google" className='width2' />Google</button>
                </div>
            </div>
        </div>
    )
}

Signup.propTypes={
    welcome: PropTypes.string,
    create: PropTypes.string,
}

Signup.defaultProps={
    welcome: "Welcome Back!",
    create: "Create Account",
}