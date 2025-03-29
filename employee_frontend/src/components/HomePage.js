import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpg'; // Adjust path if needed

const HomePage = () => {
    return (
        <div className="home-container">
            {/* Left Side - Background Image */}
            <div className="home-left">
                <img src={backgroundImage} alt="Background" />
            </div>

            {/* Right Side - Welcome Message */}
            <div className="home-right">
                <h2>Welcome to the Employee Attendance System</h2>
                <Link to="/login" className="btn">Get Started</Link>
            </div>
        </div>
    );
};

export default HomePage;
