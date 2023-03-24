import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({
        example: "U-1",
    })
    email: string;
    @ApiProperty({
        example: "test@123",
    })
    password: string;
}