import * as bcrypt from 'bcryptjs';
import { genSalt, hash } from 'bcryptjs';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import { createTransport } from 'nodemailer';

import { Environment } from '@shared/variables/environment';

import { DatabaseService } from '@shared/database/services/database.service';

import { AuthDto } from './dto/auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

import { authEmailPage } from './pages/auth-email.page';
import { Injectable } from '@nestjs/common/decorators';
import { BadRequestException, UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthService extends DatabaseService {

  async issueAccessToken(userId: number, userEmail: string) {
    const refreshToken = await sign({ userId: userId, email: userEmail }, Environment.JWT_SECRET, {
      expiresIn: '1h',
    });

    const accessToken = await sign({ userId: userId }, Environment.JWT_SECRET, {
      expiresIn: '7d',
    });
    return { refreshToken, accessToken };
  }
}
