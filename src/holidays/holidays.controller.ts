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

import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { Holiday } from './holidays.model';
import { HolidaysService } from './holidays.service';

@Controller('holidays')
export class HolidaysController {
  constructor(private readonly holidaysService: HolidaysService) {}

  @Post()
  create(@Body() createHolidayDto: CreateHolidayDto) {
    return this.holidaysService.create(createHolidayDto);
  }

  @Get()
  findAll(): Promise<Holiday[]> {
    return this.holidaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Holiday> {
    return this.holidaysService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHolidayDto: UpdateHolidayDto) {
    return this.holidaysService.update(id, updateHolidayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.holidaysService.remove(+id);
  }
}
