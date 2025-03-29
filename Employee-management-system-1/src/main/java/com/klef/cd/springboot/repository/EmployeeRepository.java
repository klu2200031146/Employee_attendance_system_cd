package com.klef.cd.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.cd.springboot.model.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByUsername(String username);
    
}
