import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {PlayerEntity} from './Player/players.entity'
import {MatchEntity} from './Matches/matches.entity'
import {ProfileEntity} from './Profile/profile.entity'
import {RatingEntity} from './Ratings/ratings.etity'
import {TeamEntity} from './Team/team.entity'
export const config:TypeOrmModuleOptions={
    type: 'postgres',
    username: 'postgres',
    password: '12345',
    port: 5432,
    host: '127.0.0.1',
    database: 'Players',
    synchronize: true,
    entities:[PlayerEntity,ProfileEntity,MatchEntity,TeamEntity,RatingEntity],
    autoLoadEntities:true
}