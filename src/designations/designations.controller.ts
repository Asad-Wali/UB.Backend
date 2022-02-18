/* eslint-disable prettier/prettier */
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';

import { Designation } from './designations.model';
import { DesignationsService } from './designations.service';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { UpdateDesignationDto } from './dto/update-designation.dto';

@Controller('designations')
export class DesignationsController {
  constructor(private readonly designationsService: DesignationsService) {}

  @Post()
  create(@Body() createDesignationDto: CreateDesignationDto): Designation {
    return this.designationsService.create(createDesignationDto);
  }

  @Get()
  findAll(): Promise<Designation[]> {
    return this.designationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Designation> {
    return this.designationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDesignationDto: UpdateDesignationDto,
  ) {
    return this.designationsService.update(id, updateDesignationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.designationsService.remove(id);
  }
}
