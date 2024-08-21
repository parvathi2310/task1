// Login.js
import React from 'react';
import '../styles/Style.css';

const Login = () => {
    return (
        <div className="container">
            <div className="mini-container">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <a href="#">Forgot password?</a>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/signup">Signup</a></p>
                <div className="social-login">
                    <span>OR</span>
                    <button>Login with Facebook</button>
                    <button>Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
