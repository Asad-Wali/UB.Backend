/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  Name: string;

  @IsNotEmpty()
  Password: string;

  @IsNotEmpty()
  status: UserStatus;
}
export enum UserStatus {
  Active = 1,
  Disabled = 0,
}
