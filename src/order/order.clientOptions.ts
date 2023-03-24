import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const orderClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '0.0.0.0:50053',
        package: "auth",
        protoPath: 'node_modules/grpc-proto/proto/order.proto',
    },
};
