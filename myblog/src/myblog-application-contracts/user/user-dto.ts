import { ApiProperty } from "@nestjs/swagger";

export class UserDto {

    @ApiProperty()
    public UserName: string;

    @ApiProperty()
    public PassWord: string;

}
