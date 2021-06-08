import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PlayerEntity} from '../players.entity';
import {ProfileEntity} from '../../Profile/profile.entity'
@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity]),TypeOrmModule.forFeature([ProfileEntity])],
  controllers: [PlayerController],
  providers: [PlayerService]
})
export class PlayerModule {}
