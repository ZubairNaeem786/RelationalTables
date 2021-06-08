import { Body, Controller, Delete, Get, Post, Put,Patch } from '@nestjs/common';
import {RatingsService} from './ratings.service'

@Controller('ratings')
export class RatingsController {constructor(private ratingService:RatingsService){}
@Get('/allRatings')
async allRatings()
{   const Ratings=await this.ratingService.findAll()
    return Ratings
}
@Post('/addRating')
async addRating(@Body() body)
{
    const data=await this.ratingService.createRating(body)
    return data
}

@Put('/updateRating')
async updateRating(@Body() body)
{
    const data=await this.ratingService.update(body)
    return data
}

@Delete('/removeRating')
async deleteRating(@Body() body)
{
    const data=await this.ratingService.remove(body)
    return data
}}
