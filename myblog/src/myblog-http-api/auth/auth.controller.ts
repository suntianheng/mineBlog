import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/myblog-application-contracts/user/user-dto';

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Body() userDto: UserDto) {
        console.log("123")
        return userDto.UserName;
    }


}
