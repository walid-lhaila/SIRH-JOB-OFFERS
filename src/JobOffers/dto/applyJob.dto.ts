import { IsString, IsNotEmpty } from 'class-validator';

export class ApplyJobDto {
  @IsString()
  @IsNotEmpty()
  candidateId: string;
}
