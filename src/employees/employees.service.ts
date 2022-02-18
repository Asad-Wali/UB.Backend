import { Repository } from 'typeorm';

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

//import { EmployeesController } from './employees.controller';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employees.model';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeService: Repository<Employee>,
  ) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    const {
      First_name,
      Last_name,
      Father_name,
      Address_line_1,
      Address_line_2,
      City,
      Province,
      Dob,
      Gender,
      Id_card_number,
      Phone_1,
      Phone_2,
      Joining_date,
      Last_salary,
      Current_salary,
      MachineID,
      Picture,
      department,
      designation,
      account,
    } = createEmployeeDto;
    const employee = {
      First_name,
      Last_name,
      Father_name,
      Address_line_1,
      Address_line_2,
      City,
      Province,
      Dob,
      Gender,
      Id_card_number,
      Phone_1,
      Phone_2,
      Joining_date,
      Last_salary,
      Current_salary,
      MachineID,
      Picture,
      department,
      designation,
      account,
    };
    this.employeeService.save(employee);
    return employee;
  }

  findAll(): Promise<Employee[]> {
    return this.employeeService.find();
  }

  findOne(id: number): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    const findEmployee = await this.employeeService.findOne(id);
    findEmployee.First_name = updateEmployeeDto.First_name;
    findEmployee.Last_name = updateEmployeeDto.Last_name;
    findEmployee.Father_name = updateEmployeeDto.Father_name;
    findEmployee.Address_line_1 = updateEmployeeDto.Address_line_1;
    findEmployee.Address_line_2 = updateEmployeeDto.Address_line_2;
    findEmployee.City = updateEmployeeDto.City;
    findEmployee.Province = updateEmployeeDto.Province;
    findEmployee.Dob = updateEmployeeDto.Dob;
    findEmployee.Gender = updateEmployeeDto.Gender;
    findEmployee.Id_card_number = updateEmployeeDto.Id_card_number;
    findEmployee.Phone_1 = updateEmployeeDto.Phone_1;
    findEmployee.Phone_2 = updateEmployeeDto.Phone_2;
    findEmployee.Joining_date = updateEmployeeDto.Joining_date;
    findEmployee.Last_salary = updateEmployeeDto.Last_salary;
    findEmployee.Current_salary = updateEmployeeDto.Current_salary;
    findEmployee.MachineID = updateEmployeeDto.MachineID;
    findEmployee.Picture = updateEmployeeDto.Picture;
    this.employeeService.save(findEmployee);
    return findEmployee;
  }

  async remove(id: number): Promise<void> {
    await this.employeeService.delete(id);
  }
}
