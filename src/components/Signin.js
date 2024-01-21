import React from 'react';
import envelopeSolid from 'C:/Users/faiqa/OneDrive/Desktop/Projects/signup/src/envelopeSolid.svg';
import lockSolid from 'C:/Users/faiqa/OneDrive/Desktop/Projects/signup/src/lockSolid.svg';
import { Link } from 'react-router-dom';

export default function Signin() {
    return (
        <div className='container block'>
            <div className='row'>
                <div className='col-md-6 text-center'>
                    <h1 className='account sign'>Sign In</h1>
                    <img src={envelopeSolid} alt="user" className='user email' />
                    <input type="email" className="form-control create" id="email" placeholder="Email" />

                    <img src={lockSolid} alt="user" className='user' />
                    <input type="password" className="form-control create" id="password" placeholder="Password" />

                    <p className='forgot'><Link to="/forget">Forgot Password?</Link></p>

                    <button type="button" className='btn signup signin'>SIGN IN</button>
                </div>

                <div className='col-md-6 layout text-center'>
                    <h2 className='welcome hello'>Hello, Friend</h2>
                    <p className='personal'>Enter your personal details and start enjoying with us</p>
                    <Link to="/"><button type="button" className='btn leftsign right'>SIGN UP</button></Link>
                </div>
            </div>
        </div>
    )
}
