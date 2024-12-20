import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class JobDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  salary: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  createdBy: string;
}
