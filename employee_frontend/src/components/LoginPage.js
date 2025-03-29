import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/background.jpg'; 

const LoginPage = ({ setUsername }) => {
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7777/api/auth/signin', {
                username: usernameInput,
                password: passwordInput
            });

            if (response.data === "Login successful!") {
                setUsername(usernameInput);
                navigate('/attendance');
            } else {
                setErrorMessage(response.data);
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Login failed! Please try again.');
        }
    };

    return (
        <div className="login-container">
            {/* Left Side - Image */}
            <div className="login-left">
                <img src={loginImage} alt="Login" />
            </div>

            {/* Right Side - Login Form */}
            <div className="login-right">
                <div className="form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
