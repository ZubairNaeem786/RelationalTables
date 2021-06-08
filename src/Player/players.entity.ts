import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { MatchEntity } from '../Matches/matches.entity';
import { TeamEntity } from '../Team/team.entity';
import { ProfileEntity } from '../Profile/profile.entity';
import { RatingEntity } from '../Ratings/ratings.etity';
@Entity('Players')
export class PlayerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  Fname: string;
  @Column()
  Lname: string;
  @Column()
  age: number;
  @Column()
  department: string;
  @OneToOne(() => ProfileEntity)
  @JoinColumn()
  public profile: ProfileEntity;
  @OneToOne(() => RatingEntity)
  @JoinColumn()
  public ratings: RatingEntity;

  @OneToMany(() => MatchEntity, (match) => match.player)
  match: MatchEntity[];
  @ManyToOne(() => TeamEntity, (team) => team.player)
  team: TeamEntity;
}
