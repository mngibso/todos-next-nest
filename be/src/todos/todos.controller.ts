import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodoService) {}

  @Post()
  // @Body() decorator with DTO class triggers the validation pipe
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const todo = await this.todosService.get(id);
    if (!todo) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return todo;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
    @Res() res: Response,
  ) {
    const todo = await this.todosService.update(id, updateTodoDto);
    if (!todo) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    res.status(HttpStatus.NO_CONTENT).send();
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const todo = await this.todosService.delete(id);
    if (!todo) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    res.status(HttpStatus.NO_CONTENT).send();
  }
}
