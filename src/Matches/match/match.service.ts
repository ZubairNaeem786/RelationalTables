import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatchEntity } from '../matches.entity';
import { Repository } from 'typeorm';
@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchEntity)
    private matchRepository: Repository<MatchEntity>,
  ) {}

 async createMatch(body) {
    const data=await this.matchRepository.save(body)
    return data
  }

  async findAll() {
    return 'matches';
  }

 async remove(body) {
    try{
      const data=await this.matchRepository.delete(body.id);
      return 'Match Deleted Successfully'
    }
    catch(e)
    {
      return e
    }
  }

 async update(body)
  {
    const data=await this.matchRepository.findOne(body.id);
    if(data)
    {
     await this.matchRepository.update(body.id,body)
    return "Match Updated"
    }
  }
}
