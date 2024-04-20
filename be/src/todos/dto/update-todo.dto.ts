import { IsBoolean, IsOptional, IsString } from 'class-validator';

// use PATCH, fields not required
export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  task?: string;

  @IsOptional()
  @IsBoolean()
  done?: boolean;
}
