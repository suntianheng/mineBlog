import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/myblog-application/passport/jwt-auth.guard';
import { UserDto } from 'src/myblog-application/user/user-dto';
import { UserService } from 'src/myblog-application/user/user.service';

@Controller('user')
@ApiBearerAuth()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Post('createUser')
    @ApiBody({ type: UserDto })
    async createUser(@Body() userDto: UserDto) {
        return this.userService.createUser(userDto);
    }

}
