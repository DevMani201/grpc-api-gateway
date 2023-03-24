import { Injectable, OnModuleInit } from "@nestjs/common";
import { Client, ClientGrpc } from "@nestjs/microservices";
import { patientClientOption } from "./patient.client";
import { lastValueFrom } from "rxjs";
import { PATIENT_SERVICE_NAME, PatientServiceClient } from "./patient.pb";


@Injectable()
export class PatientService implements OnModuleInit {

    @Client(patientClientOption)
    client: ClientGrpc;
    private pcs: PatientServiceClient;

    onModuleInit() {
        this.pcs =
            this.client.getService<PatientServiceClient>(PATIENT_SERVICE_NAME);
    }
    async savePatient(info: any) {
        return this.pcs.savePatient(info);
    }
    async getPatient(patientId: any) {
        return this.pcs.getPatient(patientId);
    }
    async verifyPatient(patientId: string, info) {
        const data = await lastValueFrom(
            this.pcs.verifyPatient({ patientId, info })
        );
        console.log(data);
        return this.pcs.verifyPatient({ patientId, info });
    }
    async updateAddress(patientId: any, address: any) {
        return this.pcs.updateAdress({ patientId, address });
    }
}
