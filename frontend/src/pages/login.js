import React from 'react';
import './login.css';

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-header">
                <h1>Login Page</h1>
            </div>
            <div className="login-main">
                <div className="credentials">
                    <div className="form-inputs">
                        <label htmlFor="username">username</label>
                        <input type="text" id='username' />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="userpassword">password</label>
                        <input type="password" id='userpassword' />
                    </div>

                    <button>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
