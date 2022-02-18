import { IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  department: string;

  @IsNotEmpty()
  designation: string;

  @IsNotEmpty()
  account: string;

  @IsNotEmpty()
  First_name: string;

  @IsNotEmpty()
  Last_name: string;

  @IsNotEmpty()
  Father_name: string;

  @IsNotEmpty()
  Address_line_1: string;

  @IsNotEmpty()
  Address_line_2: string;

  @IsNotEmpty()
  City: string;

  @IsNotEmpty()
  Province: string;

  @IsNotEmpty()
  Dob: Date;

  @IsNotEmpty()
  Gender: string;

  @IsNotEmpty()
  Id_card_number: string;

  @IsNotEmpty()
  Phone_1: string;

  @IsNotEmpty()
  Phone_2: string;

  @IsNotEmpty()
  Joining_date: Date;

  @IsNotEmpty()
  Last_salary: number;

  @IsNotEmpty()
  Current_salary: number;

  @IsNotEmpty()
  MachineID: number;

  @IsNotEmpty()
  Picture: string;
}
