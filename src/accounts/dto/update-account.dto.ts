import { IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

import { CreateAccountDto } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
  @IsNotEmpty()
  Title: string;
  @IsNotEmpty()
  Description: string;
}
