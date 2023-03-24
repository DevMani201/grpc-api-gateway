import { Injectable } from "@nestjs/common";
import { Client, ClientGrpc } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { authClientOptions } from "./auth.clientoptions";
import { UserDto } from "./auth.dto";
import { AUTH_SERVICE_NAME, AuthServiceClient } from "./auth.pb";

@Injectable()
export class AuthService {

    // @Inject('AUTH_SERVICE')

    @Client(authClientOptions)
    private readonly client: ClientGrpc;
    private authService: AuthServiceClient;

    onModuleInit(): void {
        this.authService = this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
    }

    async register(user: UserDto) {
        return this.authService.register(user);
    }

    async login(user: UserDto) {
        return this.authService.login(user);
    }

    async validate(token: string) {
        return lastValueFrom(this.authService.validate({ token }));
    }
}
