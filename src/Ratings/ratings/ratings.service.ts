import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatingEntity } from '../ratings.etity';
import { Repository } from 'typeorm';
import { PlayerEntity } from '../../Player/players.entity';
@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(RatingEntity)
    private ratingRepository: Repository<RatingEntity>,
    @InjectRepository(PlayerEntity)
    private palyerRepository: Repository<PlayerEntity>,
  ) {}

  async createRating(body) {
    const rating = await this.ratingRepository.save(body.rating);
    const data = await this.palyerRepository.findOne(body.id);
    if (data) {
      const res = await this.palyerRepository.update(body.id, {
        ratings: rating,
      });
      return res;
    }
  }

  async findAll() {
 const ratings=await this.ratingRepository.find()
 return ratings
  }

  async remove(body) {
    try {
      await this.ratingRepository.delete(body.id);
    } catch (e) {
      return e;
    }
  }

  update(body) {
    const data = this.ratingRepository.findOne(body.id);
    if (data) {
      this.ratingRepository.update(body.id, body);
      return 'Rating  Updated';
    }
  }
}
