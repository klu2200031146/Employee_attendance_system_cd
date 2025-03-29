import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import AttendancePage from './components/AttendancePage';
import ViewAttendancePage from './components/ViewAttendancePage';
import Navbar from './components/Navbar';

const App = () => {
    const [username, setUsername] = useState('');

    const handleLogout = () => {
        setUsername(''); // Clear username on logout
    };

    return (
        <Router>
            <Navbar username={username} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage setUsername={setUsername} />} />
                {username && (
                    <>
                        <Route path="/attendance" element={<AttendancePage username={username} onLogout={handleLogout} />} />
                        <Route path="/view-attendance" element={<ViewAttendancePage username={username} />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;
