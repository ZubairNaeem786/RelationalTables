import {Column, Entity, PrimaryGeneratedColumn,OneToMany,ManyToOne } from 'typeorm';
import {PlayerEntity} from '../Player/players.entity'
@Entity('Matches')
export class MatchEntity{
@PrimaryGeneratedColumn('uuid')
id:string
@Column()
opponent:string
@Column()
result:string
@Column()
team:string
@ManyToOne(() => PlayerEntity, player => player.match)
    player: PlayerEntity
}