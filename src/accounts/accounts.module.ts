import { Account } from 'src/accounts/entities/account.entity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  exports: [TypeOrmModule],

  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
