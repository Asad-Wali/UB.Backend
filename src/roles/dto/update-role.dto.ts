import { IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsNotEmpty()
  Title: string;

  @IsNotEmpty()
  Description: string;

  @IsNotEmpty()
  status: RoleStatus;
}
export enum RoleStatus {
  Active = 1,
  Disabled = 0,
}
