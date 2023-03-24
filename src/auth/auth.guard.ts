import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Inject } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';




@Injectable()
export class AuthGuard implements CanActivate {
    @Inject(AuthService)
    public readonly service: AuthService;

    public async canActivate(ctx: ExecutionContext): Promise<boolean> {
        const req: Request = ctx.switchToHttp().getRequest();
        const authorization: string = req.headers['authorization'];

        if (!authorization) {
            throw new UnauthorizedException();
        }

        const bearer: string[] = authorization.split(' ');

        if (!bearer || bearer.length < 2) {
            throw new UnauthorizedException();
        }

        const token: string = bearer[1];


        const res = await this.service.validate(token);
        if (res.status !== 200) {
            console.log('error');
            return false;
        }

        return true

    }
}