import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/myblog-application/user/user-dto';
import { Role } from 'src/myblog-domain/user/role';
import { User } from 'src/myblog-domain/user/user';
@Injectable()
export class UserService {
    constructor(private readonly user: User) {
    }

    async findOne(username: string): Promise<UserDto> {
        const user = await User.findOne({ where: { UserName: username } });
        const userDto = new UserDto();
        userDto.username = user.UserName;
        userDto.password = user.Password;
        return userDto;
    }

    async createUser(user: UserDto): Promise<UserDto> {

        this.user.UserName = user.username;
        this.user.Password = user.password;
        const role = new Role();
        role.RoleName = "system admin";
        role.RoleType = 1;
        const roles = new Array<Role>();
        roles.push(role);
        this.user.Roles = roles;
        const userResult = await this.user.save();
        const userDto = new UserDto();
        userDto.username = userResult.UserName;
        return userDto;
    }


}
