import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

import { AuthDto } from './dto/auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

}
