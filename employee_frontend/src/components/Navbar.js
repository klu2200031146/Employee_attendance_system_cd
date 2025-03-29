import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ username, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/'); // Navigate to home page after logout
    };

    return (
        <nav className="navbar">
            <h1>Employee Attendance System</h1>
            <div className="nav-links">
                {username ? (
                    <>
                        <Link to="/attendance">Record Attendance</Link>
                        <Link to="/view-attendance">View Attendance</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
