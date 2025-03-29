import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAttendancePage = ({ username }) => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const response = await axios.get('http://localhost:7777/api/attendance/get', {
                    params: { username }
                });
                setAttendanceRecords(response.data);
            } catch (error) {
                console.error(error);
                setErrorMessage('Failed to fetch attendance records!');
            }
        };

        if (username) {
            fetchAttendance();
        }
    }, [username]);

    return (
        <div className="attendance-container">
            <h2>Your Attendance Records</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <ul>
                {attendanceRecords.map((record, index) => (
                    <li key={index}>{record.attendanceDate}</li>
                ))}
            </ul>
        </div>
    );
};

export default ViewAttendancePage;
