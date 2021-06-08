import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {ProfileService} from './profile.service'

@Controller('profile')
export class ProfileController {constructor(private profileService:ProfileService){}
@Get('/allProfiles')
async allprofiles()
{   const profiles=await this.profileService.findAll()
    return profiles
}
// @Post('/addProfile')
// async addprofile(@Body() body)
// {
//     const data=await this.profileService.createProfile(body)
//     return data
// }

@Put('/updateProfile')
async updateProfile(@Body() body)
{
    const data=this.profileService.update(body)
    return data
}

@Delete('/removeprofile')
async deleteProfile(@Body() body)
{
    const data=await this.profileService.remove(body)
    return data
}}
