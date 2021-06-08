import {Column, Entity, PrimaryGeneratedColumn,OneToOne,JoinColumn} from 'typeorm';
import {PlayerEntity} from '../Player/players.entity'
@Entity('Ratings')
export class RatingEntity{
@PrimaryGeneratedColumn('uuid')
id:string
@Column()
points:number
@Column()
ranking:string

}