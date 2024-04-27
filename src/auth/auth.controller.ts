import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

import { AuthDto } from './dto/auth.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('register')
  signIn(@Body() body: AuthDto) {
    return this.authService.singnUp(body);
  }

  // @Post('login')
  // signId(@Body() body: AuthDto) {
  //   return this.authService.signIn(body);
  // }
}
