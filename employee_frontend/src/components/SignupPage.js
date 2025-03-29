import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import signupImage from '../assets/background.jpg';

const SignupPage = () => {
    const [id, setId] = useState(null); // Store generated ID
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7777/api/auth/signup', { 
                username, 
                password 
            });

            setId(response.data.id); // Store ID from response
            setSuccessMessage(`Signup successful! Your ID is ${response.data.id}. Please log in.`);
            setErrorMessage('');
            setUsername('');
            setPassword('');
        } catch (error) {
            console.error(error);
            setErrorMessage('Signup failed!');
            setSuccessMessage('');
        }
    };

    return (
        <div className="signup-container">
            {/* Left Side - Image */}
            <div className="signup-left">
                <img src={signupImage} alt="Signup" />
            </div>

            {/* Right Side - Signup Form */}
            <div className="signup-right">
                <div className="form-container">
                    <h2>Signup</h2>
                    <form onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Signup</button>
                    </form>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
