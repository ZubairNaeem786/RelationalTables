import { Module } from '@nestjs/common';
import { RatingsController } from './ratings.controller';
import { RatingsService } from './ratings.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {RatingEntity} from '../ratings.etity';
import {PlayerEntity} from '../../Player/players.entity'
@Module({
  imports: [TypeOrmModule.forFeature([RatingEntity]),TypeOrmModule.forFeature([PlayerEntity])],
  controllers: [RatingsController],
  providers: [RatingsService]
})
export class RatingsModule {}
