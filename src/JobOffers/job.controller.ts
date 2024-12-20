import { Controller, UseGuards } from '@nestjs/common';
import { JobService } from './job.service';
import { JobDto } from './dto/job.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CustomAuthGuard } from '../auth/custom-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import * as jwt from 'jsonwebtoken';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @MessagePattern({ cmd: 'createJobOffers' })
  @UseGuards(CustomAuthGuard, RolesGuard)
  @Roles('HR')
  async createJobOffers(@Payload() data: any) {
    const { token, payload } = data;
    const jwtToken = token.split(' ')[1];
    const decodedToken = jwt.decode(jwtToken) as jwt.JwtPayload;

    const email = decodedToken?.email;
    if (!email) {
      throw new Error('Email not found in token');
    }

    const jobData = {
      ...payload,
      createdBy: email,
    };

    return this.jobService.createJobOffers(jobData);
  }
}
