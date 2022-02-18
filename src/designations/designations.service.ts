/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Designation } from './designations.model';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { UpdateDesignationDto } from './dto/update-designation.dto';

@Injectable()
export class DesignationsService {
  constructor(
    @InjectRepository(Designation)
    private designationService: Repository<Designation>,
  ) {}
  create(createDesignationDto: CreateDesignationDto): Designation {
    const { Title, Description } = createDesignationDto;
    const designation = {
      Title,
      Description,
    };
    this.designationService.save(designation);
    return designation;
  }

  findAll(): Promise<Designation[]> {
    return this.designationService.find();
  }

  findOne(id: string): Promise<Designation> {
    return this.designationService.findOne(id);
  }

  async update(id: string, updateDesignationDto: UpdateDesignationDto) {
    const findDesignation = await this.designationService.findOne(id);
    findDesignation.Title = updateDesignationDto.Title;
    findDesignation.Description = updateDesignationDto.Description;
    this.designationService.save(findDesignation);
    return findDesignation;
  }

  async remove(id: string): Promise<void> {
    await this.designationService.delete(id);
  }
}
