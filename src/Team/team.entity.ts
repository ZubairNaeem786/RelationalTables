import {Column, Entity, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import {PlayerEntity} from '../Player/players.entity'
@Entity('Team')
export class TeamEntity{
@PrimaryGeneratedColumn('uuid')
id:string
@Column()
name:string
@Column()
province:string
@Column()
owner:string
@OneToMany(() => PlayerEntity, player => player.team)
    player: PlayerEntity[]
}