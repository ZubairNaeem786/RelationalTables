import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {PlayerService} from './player.service'
@Controller('player')
export class PlayerController {constructor(private playerService:PlayerService){}
@Get('/allPlayers')
async allplayers()
{   const players=await this.playerService.findAll();
    return players;
}
@Post('/addPlayer')
async addPlayer(@Body() body)
{
    const data=await this.playerService.createPlayer(body)
    return data
}

@Put('/updatePlayer')
async updatePlayer(@Body() body)
{
    const data=await this.playerService.update(body);
    return data
}

@Delete('/removePlayer')
async deletePlayer(@Body() body)
{
    const data=await this.playerService.remove(body)
    return data
}
@Post('/wins')

async winMatches(@Body() body)
{
    const data=await this.playerService.winMatches(body);
    return data
}
@Post('/team')

async matches(@Body() body)
{
    const data=await this.playerService.matchesForTeam(body);
    return data
}
@Post('/rank')

async playersRank(@Body() body)
{
    const data=await this.playerService.playerRanks(body);
    return data
}

@Get('/maxStrike')

async maxStrike(@Body() Body)
{
    const data= await this.playerService.MaxStrike();
    return data
}

@Get('/maxRuns')

async maxRuns(@Body() Body)
{
    const data= await this.playerService.MostRuns();
    return data
}



}
