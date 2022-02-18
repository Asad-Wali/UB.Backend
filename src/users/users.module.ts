/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RolesModule } from 'src/roles/roles.module';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [RolesModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
