import { Injectable } from '@nestjs/common';
import { IAuthService } from 'src/myblog-application-contracts/auth/iauth.interface';
import { IUserService } from 'src/myblog-application-contracts/user/iuser.interface';

@Injectable()
export class AuthService implements IAuthService {


    constructor(private readonly userService: IUserService) {

    }
    async validateUser(username: string, pass: string) {

        const user = await this.userService.findOne(username);
        if (user && user.PassWord === pass) {
            return true;
        }
        return false;
    }
}
