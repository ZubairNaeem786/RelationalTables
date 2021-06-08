import {Column, Entity, PrimaryGeneratedColumn,OneToOne,JoinColumn } from 'typeorm';
import {PlayerEntity} from '../Player/players.entity'
@Entity('Profile')
export class ProfileEntity{
@PrimaryGeneratedColumn('uuid')
id:string
@Column()
strikeRate:number
@Column()
Avg:number
@Column()
totalScore:number
@Column()
bestScore:number
    

}