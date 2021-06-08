import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {MatchService} from './match.service'
@Controller('match')
export class MatchController {constructor(private matchService:MatchService){}
@Get('/allMatch')
async allUsers()
{   const users=await this.matchService.findAll()
    return users
}
@Post('/addMatch')
async addMatch(@Body() body)
{
    const data=await this.matchService.createMatch(body)
    return data
}

@Put('/updateMatch')
async updateMatch(@Body() body)
{
    const data=await this.matchService.update(body)
    return data
}

@Delete('/removeMatch')
async deleteMatch(@Body() body)
{
    const data=await this.matchService.remove(body)
    return data
}}
