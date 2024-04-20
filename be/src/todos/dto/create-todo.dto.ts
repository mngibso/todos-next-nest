import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  task: string;

  @IsOptional()
  @IsBoolean()
  done?: boolean;
}
