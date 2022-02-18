import { Designation } from 'src/designations/entities/designation.entity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DesignationsController } from './designations.controller';
import { DesignationsService } from './designations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Designation])],
  exports: [TypeOrmModule],
  controllers: [DesignationsController],
  providers: [DesignationsService],
})
export class DesignationsModule {}
