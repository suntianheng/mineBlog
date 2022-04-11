export interface IAuthService {

    validateUser(username: string, pass: string): Promise<boolean>;

}
