import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MatchEntity} from '../matches.entity'
@Module({
  imports: [TypeOrmModule.forFeature([MatchEntity])],
  controllers: [MatchController],
  providers: [MatchService]
})
export class MatchModule {}
