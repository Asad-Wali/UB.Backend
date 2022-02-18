import { IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

import { CreateDesignationDto } from './create-designation.dto';

export class UpdateDesignationDto extends PartialType(CreateDesignationDto) {
  @IsNotEmpty()
  Title: string;

  @IsNotEmpty()
  Description: string;
}
