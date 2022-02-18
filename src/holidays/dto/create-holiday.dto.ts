import { IsNotEmpty } from 'class-validator';

export class CreateHolidayDto {
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
