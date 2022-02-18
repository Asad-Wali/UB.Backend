import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  Title: string;

  @IsNotEmpty()
  Description: string;
}
