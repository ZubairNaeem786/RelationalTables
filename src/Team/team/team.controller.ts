import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {TeamService} from './team.service'

@Controller('team')
export class TeamController {constructor(private teamService:TeamService){}
@Get('/allTeams')
async allTeams()
{   const teams=await this.teamService.findAll()
    return teams
}
@Post('/addTeam')
async addTeam(@Body() body)
{
    const data=await this.teamService.createTeam(body)
    return data
}

@Put('/updateTeam')
async updateTeam(@Body() body)
{
    const data=await this.teamService.update(body)
    return data
}

@Delete('/removeTeam')
async deleteTeam(@Body() body)
{
    const data=await this.teamService.remove(body)
    return data
}
@Get('/teamPlayers')
async teamPlayers()
{   const teams=await this.teamService.specficPlayers()
    return teams
}
@Get('/rankteamPlayers')
async rankteamPlayers()
{   const teams=await this.teamService.rankPlayers()
    return teams
}
}
