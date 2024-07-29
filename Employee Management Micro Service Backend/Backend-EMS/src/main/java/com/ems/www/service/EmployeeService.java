package com.ems.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.www.model.Employee;
import com.ems.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository employeeRepository;
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
}
