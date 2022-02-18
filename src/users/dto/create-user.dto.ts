/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
  //jjj
  @IsNotEmpty()
  Name: string;

  @IsNotEmpty()
  role: number;
}
