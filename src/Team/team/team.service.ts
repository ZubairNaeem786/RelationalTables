import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamEntity } from '../team.entity';
import { MoreThan, Repository } from 'typeorm';
import { profile } from 'console';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamEntity)
    private teamRepository: Repository<TeamEntity>,
  ) {}

  createTeam(body) {
    const data = this.teamRepository.save(body);
    return data;
  }

  async findAll() {
    const teams = this.teamRepository.find({ relations: ["player"] });
    return teams;
  }

  remove(body) {
    try {
      this.teamRepository.delete(body.id);
      return 'Team Deleted';
    } catch (e) {
      return e;
    }
  }

  update(body) {
    const data=this.teamRepository.findOne(body.id);
    if(data)
    {
      this.teamRepository.update(body.id,{name:body.name,province:body.province,owner:body.owner})
    return "Team Updated"
    }
  }

  async specficPlayers()
  {
    const user = await this.teamRepository.createQueryBuilder("team")
  .leftJoinAndSelect("team.player", "player").leftJoinAndSelect("player.profile","profile")
  .where("profile.strikeRate = :strikeRate", { strikeRate:300 })
  .getManyAndCount();
 return user
  }
  async rankPlayers()
  {
    const user = await this.teamRepository.createQueryBuilder("team")
  .leftJoinAndSelect("team.player", "player").leftJoinAndSelect("player.ratings","ratings")
  .where("ratings.ranking = :ranking", { ranking:'3rd' })
  .getManyAndCount();
  return user
  }
}
