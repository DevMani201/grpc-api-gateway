import { ClientOptions, Transport } from "@nestjs/microservices";
import { PATIENT_PACKAGE_NAME } from "./patient.pb";



export const patientClientOption: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '0.0.0.0:50052',
        package: PATIENT_PACKAGE_NAME,
        protoPath: 'node_modules/grpc-proto/proto/patient.proto',
        // protoPath: join(__dirname, "../../src/proto/patient.proto"),
    },
};
