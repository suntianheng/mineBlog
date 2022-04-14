import { Controller, Request, Post, UseGuards, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { UserDto } from 'src/myblog-application/user/user-dto';
import { AuthService } from 'src/myblog-application/auth/auth.service';
import { JwtAuthGuard } from 'src/myblog-application/passport/jwt-auth.guard';
import { LocalAuthGuard } from 'src/myblog-application/passport/local-auth.guard';

@Controller('auth')
@ApiBearerAuth()
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiBody({ type: UserDto })
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

}
