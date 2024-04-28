import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

import { CurrentUser } from './decorators/currentUser';

import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  signIn(@Body() body: AuthDto) {
    return this.authService.signUp(body);
  }

  @Post('login')
  signId(@Body() body: AuthDto) {
    return this.authService.signIn(body);
  }

  @Post('check')
  checkAuth(@CurrentUser('userId') userId: number) {
    return this.authService.checkAuth(userId);
  }
}
