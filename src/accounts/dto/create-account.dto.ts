import { IsNotEmpty } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  Title: string;

  @IsNotEmpty()
  Description: string;
}
