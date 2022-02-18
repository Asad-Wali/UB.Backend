/* eslint-disable prettier/prettier */
export class Holiday {
  Title: string;
  Date: Date;
  status: HolidayStatus;
}
export enum HolidayStatus {
  Normal = 0,
  Public = 1,
  Other = 2,
}
