import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, PatientModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
