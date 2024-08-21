// Signup.js
import React from 'react';
import '../styles/Style.css';

const Signup = () => {
    return (
        <div className="container">
            <div className="mini-container">
                <h2>Signup</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button type="submit">Signup</button>
                </form>
                <p>Already have an account? <a href="/login">Signin</a></p>
                <div className="social-login">
                    <span>OR</span>
                    <button>Signup with Facebook</button>
                    <button>Signup with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
