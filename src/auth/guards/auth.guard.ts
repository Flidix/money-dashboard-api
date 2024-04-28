import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtPayload, decode } from 'jsonwebtoken';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      console.log('Authorization header missing');
      throw new UnauthorizedException({ message: 'unauthorized' });
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      console.log('Invalid token format');
      throw new UnauthorizedException({ message: 'unauthorized' });
    }

    const user = decode(token) as JwtPayload;

    if (!user || typeof user !== 'object') {
      throw new UnauthorizedException({ message: 'unauthorized' });
    }

    const expiration = user.exp;
    const currentTime = Math.floor(Date.now() / 1000);

    if (expiration && currentTime > expiration) {
      throw new UnauthorizedException({ message: 'Token has expired' });
    }

    req.ctx = user;

    return true;
  }
}
