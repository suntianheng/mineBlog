import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/myblog-application-contracts/user/user-dto';
export type User = any;
@Injectable()
export class UsersService {
    private readonly users: User[];
    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'admin',
                password: '1234',
            },
        ];
    }

    async findOne(username: string): Promise<UserDto> {
        return this.users.find(user => user.username === username);
    }


}
