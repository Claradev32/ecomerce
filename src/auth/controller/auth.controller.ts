import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { Users } from '../user.entity';

@Controller('api/v1/auth/')
export class AuthController {
    constructor(private usersService: AuthService) { }
    
    @Post('signup')
    async signup(@Body() user: Users): Promise<Users> {
        return this.usersService.signup(user);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.usersService.login(req.user)
    }
}