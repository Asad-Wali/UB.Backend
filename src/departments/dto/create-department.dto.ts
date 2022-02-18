import { IsNotEmpty } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty()
  Title: string;

  @IsNotEmpty()
  Description: string;
}
