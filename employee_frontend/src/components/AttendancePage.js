import React, { useState } from 'react';
import axios from 'axios';

const AttendancePage = ({ username }) => {
    const [employeeId, setEmployeeId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
// Function to record attendance
const recordAttendance = async () => {
    if (!employeeId) {
        setErrorMessage('Please enter an employee ID.');
        setSuccessMessage('');
        return;
    }

    try {
        const response = await axios.post('http://localhost:7777/api/attendance/record', null, {
            params: { employeeId }
        });

        if (response.status === 200) {
            setSuccessMessage('Attendance recorded successfully!');
            setErrorMessage('');
            setEmployeeId('');
        } else {
            setErrorMessage('Failed to record attendance!');
            setSuccessMessage('');
        }
    } catch (error) {
        console.error(error);
        // Extract a more readable error message
        const errorMsg = error.response?.data?.message || 'Error: Unable to record attendance.';
        setErrorMessage(errorMsg);
        setSuccessMessage('');
    }
};


    return (
        <div className="attendance-container">
            <h2>Attendance Page</h2>
            <h3>Welcome, {username}</h3>

            <input
                type="number"
                placeholder="Enter Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
            />
            <button onClick={recordAttendance}>Record Attendance</button>

            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default AttendancePage;
