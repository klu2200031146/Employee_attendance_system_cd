package com.klef.cd.springboot.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.cd.springboot.model.Employee;
import com.klef.cd.springboot.repository.EmployeeRepository;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee register(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee findByUsername(String username) {
        return employeeRepository.findByUsername(username);
    }
}
