import { ApiProperty } from "@nestjs/swagger";

export class UserDto {

    @ApiProperty()
    public username: string;

    @ApiProperty()
    public password: string;

}
