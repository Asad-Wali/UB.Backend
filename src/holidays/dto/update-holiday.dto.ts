import { IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

import { CreateHolidayDto } from './create-holiday.dto';

export class UpdateHolidayDto extends PartialType(CreateHolidayDto) {
  @IsNotEmpty()
  Title: string;

  @IsNotEmpty()
  Date: Date;

  @IsNotEmpty()
  status: HolidayStatus;
}
export enum HolidayStatus {
  Normal = 0,
  Public = 1,
  Other = 2,
}
