package com.klef.cd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.cd.springboot.model.Attendance;
import com.klef.cd.springboot.model.Employee;
import com.klef.cd.springboot.service.AttendanceService;
import com.klef.cd.springboot.service.EmployeeService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:3000")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/record")
    public Attendance recordAttendance(@RequestParam Long employeeId) {
        return attendanceService.recordAttendance(employeeId);
    }

    @GetMapping("/get")
    public List<Attendance> getAttendance(@RequestParam String username) {
        Employee employee = employeeService.findByUsername(username);
        if (employee == null) {
            return new ArrayList<>(); // Return empty list if employee not found
        }
        return attendanceService.getAttendance(employee.getId());
    }
}
