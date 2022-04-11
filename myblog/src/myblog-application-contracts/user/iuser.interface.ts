import { UserDto } from "./user-dto";

export interface IUserService {

    findOne(username: string): Promise<UserDto | undefined>;

}
