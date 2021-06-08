import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from '../players.entity';
import { Between, Repository } from 'typeorm';
import {ProfileEntity} from '../../Profile/profile.entity'
import { ProfileController } from 'src/Profile/profile/profile.controller';
@Injectable()
export class PlayerService {constructor(
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>,
    @InjectRepository(ProfileEntity)
    private profileRepository:Repository<ProfileEntity>
  ) {}

async  createPlayer(body) {
    
      try{
        
        const profile=new ProfileEntity()
        profile.strikeRate=body.profile.strikeRate
        profile.Avg=body.profile.Avg
        profile.totalScore=body.profile.totalScore
        profile.bestScore=body.profile.bestScore
    const data= await this.profileRepository.save(profile);

        const player=new PlayerEntity();
        player.Fname=body.player.Fname;
        player.Lname=body.player.Lname;
        player.age=body.player.age;
        player.department=body.player.department;
        player.team=body.player.team;
        player.profile=data
      const res=await this.playerRepository.save(player);
      return res  
      }
        catch(e)
        {
          return e
        }

  }
async winMatches(body)
{
  const user = await this.playerRepository.createQueryBuilder("players")
  .leftJoinAndSelect("players.match", "match")
  .where("players.id = :id", { id: body.id })
  .andWhere("match.result= :result",{result:body.result})
  .getManyAndCount();
  return user
}

async matchesForTeam(body)
{
  const user = await this.playerRepository.createQueryBuilder("players")
  .leftJoinAndSelect("players.match", "match")
  .where("players.id = :id", { id: body.id })
  .andWhere("match.team= :team",{team:body.team})
  .getManyAndCount();
  return user
// const data= await this.profileRepository.createQueryBuilder("profile").leftJoinAndSelect("MAX(profile.strikeRate)","max").getRawOne();
// return data
}
async MaxStrike()
{
  const user = await this.playerRepository.createQueryBuilder("players")
  .leftJoinAndSelect("players.profile", "profile").orderBy("profile.strikeRate","DESC").addOrderBy("profile.Avg","DESC")
  .getOne();
  return user
}
async MostRuns()
{
  const user = await this.playerRepository.createQueryBuilder("players")
  .leftJoinAndSelect("players.profile", "profile").orderBy("profile.totalScore","DESC").addOrderBy("profile.Avg","DESC")
  .getOne();
  return user
}
async playerRanks(body)
{
  const user = await this.playerRepository.createQueryBuilder("players")
  .leftJoinAndSelect("players.ratings", "rating")
  .where("rating.ranking= :ranking",{ranking:body.ranking})
  .getOne();
  return user
}

  async findAll() {
    const players=this.playerRepository.find({ relations: ["team","profile","ratings","match"] })
    return players;
  }

  remove(body) {
    try{
      const data=this.playerRepository.delete(body.id);
      return 'Player Deleted Successfully'
    }
    catch(e)
    {
      return e
    }
  }

  update(body)
  {
    const data=this.playerRepository.findOne(body.id);
    if(data)
    {
      this.playerRepository.update(body.id,body)
    return "Player Updated"
    }
  }

  async StrikeRate()
  {
    // const data=await this.playerRepository.find({strikeRate:Between(100,600), relations: ["profile"]})
    // const user= await this.teamRepository.find({ relations: ["player"] ,where:{strikeRate:MoreThan(300)}})
    
    // const strike=await data[0].profile.find(where:{strikeRate:MoreThan(300)})}
    // return data
  }
  }
