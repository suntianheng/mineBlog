import { Injectable } from '@nestjs/common';
import { IUserService } from 'src/myblog-application-contracts/user/iuser.interface';
import { UserDto } from 'src/myblog-application-contracts/user/user-dto';
export type User = any;
@Injectable()
export class UserService implements IUserService {
    private readonly users: User[];
    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
            },
        ];
    }

    async findOne(username: string): Promise<UserDto> {
        return this.users.find(user => user.username === username);
    }


}
