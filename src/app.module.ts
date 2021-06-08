import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm"
import { config } from './db.config';
import {MatchModule} from './Matches/match/match.module';
import {PlayerModule} from './Player/player/player.module';
import {ProfileModule} from './Profile/profile/profile.module';
import {RatingsModule} from './Ratings/ratings/ratings.module';
import {TeamModule} from './Team/team/team.module'
@Module({
  imports: [TypeOrmModule.forRoot(config),MatchModule,PlayerModule,ProfileModule,RatingsModule,TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
