import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AddressDto, PatientDto, VerifyDto } from "./patient.dto";
import { ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";
import { PatientService } from "./patient.service";


@Controller("patient")
export class PatientController {
    constructor(private patientService: PatientService) { }

    @ApiBearerAuth('jwt-auth')
    @UseGuards(AuthGuard)

    @Post("/save")
    savePatient(@Body() info: PatientDto) {
        console.log('info--->1', info);
        return this.patientService.savePatient(info);
    }
    @Post("/verify/:patientId")
    verifyPatient(
        @Param("patientId") patientId: string,
        @Body() info: VerifyDto
    ) {
        return this.patientService.verifyPatient(patientId, info);
    }
    @Get("/get/:patientId")
    getPatient(@Param("patientId") patientId: string) {
        return this.patientService.getPatient({ patientId });
    }
    @Put("/update-address/:patientId")
    updateAddress(
        @Param("patientId") patientId: string,
        @Body() address: AddressDto
    ) {
        return this.patientService.updateAddress(patientId, address);
    }
}
