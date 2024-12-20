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

  async getAllOffers(): Promise<JobDocument[]> {
    const offers = this.JobModel.find().exec();
    return offers;
  }

  async getAllOffersByUser(email: string): Promise<JobDocument[]> {
    return this.JobModel.find({ createdBy: email }).exec();
  }
}
