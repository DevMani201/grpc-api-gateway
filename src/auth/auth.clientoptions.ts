import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";
import { AUTH_PACKAGE_NAME } from "./auth.pb";

export const authClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '0.0.0.0:50051',
        package: AUTH_PACKAGE_NAME,
        protoPath: 'node_modules/grpc-proto/proto/auth.proto',
        //protoPath: join(__dirname, "../../src/proto/auth.proto"),
    },
};
