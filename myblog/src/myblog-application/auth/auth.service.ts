import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService {


    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string) {

        const user = await this.userService.findOne(username);
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { userid: user.userid, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
