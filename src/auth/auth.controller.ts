import { Body, Controller, Post, Req } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('/register')
    async register(@Req() req, @Body() userDTO: UserDTO):Promise<any> {
        await this.authService.registerUser(userDTO);
    }
}
