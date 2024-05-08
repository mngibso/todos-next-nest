import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

// DTO class is bound to the request body
export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  task: string;

  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
