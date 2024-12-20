import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Job extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  salary: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  createdBy: string;
}
export type JobDocument = Job;
export const JobSchema = SchemaFactory.createForClass(Job);
