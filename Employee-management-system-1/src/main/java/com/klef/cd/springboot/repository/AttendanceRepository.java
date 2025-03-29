package com.klef.cd.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.cd.springboot.model.Attendance;

import java.time.LocalDate;
import java.util.List;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    List<Attendance> findByEmployeeIdAndAttendanceDate(Long employeeId, LocalDate date);
    List<Attendance> findByEmployeeId(Long employeeId);
}
