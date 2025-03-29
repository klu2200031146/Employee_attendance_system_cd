package com.klef.cd.springboot.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.cd.springboot.model.Employee;
import com.klef.cd.springboot.service.EmployeeService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") 
public class AuthController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/signup")
    public Employee signup(@RequestBody Employee employee) {
        return employeeService.register(employee);
    }

    @PostMapping("/signin")
    public String signin(@RequestBody Employee employee) {
        Employee foundEmployee = employeeService.findByUsername(employee.getUsername());
        if (foundEmployee != null && foundEmployee.getPassword().equals(employee.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid username or password!";
        }
    }
}
