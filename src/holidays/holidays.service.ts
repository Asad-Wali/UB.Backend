/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { Holiday } from './holidays.model';

@Injectable()
export class HolidaysService {
  constructor(
    @InjectRepository(Holiday)
    private holidayService: Repository<Holiday>,
  ) {}
  create(createHolidayDto: CreateHolidayDto) {
    const { Title, Date, status } = createHolidayDto;
    const holiday = {
      Title,
      Date,
      status,
    };
    this.holidayService.save(holiday);
    return holiday;
  }

  findAll(): Promise<Holiday[]> {
    return this.holidayService.find();
  }

  findOne(id: string): Promise<Holiday> {
    return this.holidayService.findOne(id);
  }

  async update(id: string, updateHolidayDto: UpdateHolidayDto) {
    const findHoliday = await this.holidayService.findOne(id);
    findHoliday.Title = updateHolidayDto.Title;
    findHoliday.Date = updateHolidayDto.Date;
    this.holidayService.save(findHoliday);
    return findHoliday;
  }

  async remove(id: number): Promise<void> {
    await this.holidayService.delete(id);
  }
}
