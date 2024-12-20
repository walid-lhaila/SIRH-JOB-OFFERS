import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Job, JobDocument } from './schema/job.schema';
import { Model } from 'mongoose';
import { JobDto } from './dto/job.dto';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private JobModel: Model<JobDocument>) {}

  async createJobOffers(jobDto: JobDto): Promise<JobDocument> {
    const createJob = new this.JobModel(jobDto);
    return createJob.save();
  }
}
