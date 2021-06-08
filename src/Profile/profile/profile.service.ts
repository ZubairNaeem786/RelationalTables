import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from '../profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private profileRepository: Repository<ProfileEntity>,
  ) {}

  createProfile(body) {
    if (body.player) {
      try {
        const data = this.profileRepository.save(body);
        return data;
      } catch (e) {
        return e;
      }
    } else {
      return 'Profile Must have a Player';
    }
  }

  async findAll() {
    const profiles = this.profileRepository.find();
    return profiles;
  }

async  remove(body) {
    try {
    await  this.profileRepository.delete(body.id);
      return 'profile Deleted';
    } catch (e) {
      return e;
    }
  }

  update(body) {
    const data=this.profileRepository.findOne(body.id);
    if(data)
    {
      this.profileRepository.update(body.id,body)
    return "Profile Updated"
    }
  }
  }

