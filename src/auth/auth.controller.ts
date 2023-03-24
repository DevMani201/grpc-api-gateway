import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('user')
@Controller('user')
export class AuthController {
    constructor(private authService: AuthService) { }




    @Post('register')
    async register(@Body() user: UserDto) {

        return this.authService.register(user);
    }

    @Post('login')
    async login(@Body() user: UserDto) {

        return this.authService.login(user);
    }
}