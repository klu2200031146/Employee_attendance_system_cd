package com.klef.cd.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.cd.springboot.model.Attendance;
import com.klef.cd.springboot.repository.AttendanceRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class AttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;

    public Attendance recordAttendance(Long employeeId) {
        LocalDate today = LocalDate.now();

        
        List<Attendance> existingAttendance = attendanceRepository.findByEmployeeIdAndAttendanceDate(employeeId, today);
        if (!existingAttendance.isEmpty()) {
            throw new RuntimeException("Attendance already recorded for today.");
        }

       
        Attendance attendance = new Attendance();
        attendance.setEmployeeId(employeeId);
        attendance.setAttendanceDate(today);
        return attendanceRepository.save(attendance);
    }

    public List<Attendance> getAttendance(Long employeeId) {
        return attendanceRepository.findByEmployeeId(employeeId);
    }
}
