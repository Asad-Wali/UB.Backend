/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Department } from './departments.model';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentService: Repository<Department>,
  ) {}
  create(createDepartmentDto: CreateDepartmentDto): Department {
    const { Title, Description } = createDepartmentDto;

    const department = {
      Title,
      Description,
    };
    this.departmentService.save(department);
    return department;
  }

  findAll(): Promise<Department[]> {
    return this.departmentService.find();
  }

  findOne(id: string): Promise<Department> {
    return this.departmentService.findOne(id);
  }

  async update(
    id: string,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    const findDepartment = await this.departmentService.findOne(id);
    findDepartment.Title = updateDepartmentDto.Title;
    findDepartment.Description = updateDepartmentDto.Description;
    this.departmentService.save(findDepartment);
    return findDepartment;
  }

  async remove(id: string): Promise<void> {
    await this.departmentService.delete(id);
  }
}
