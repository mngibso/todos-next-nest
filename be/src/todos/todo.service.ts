import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDo } from './todo.db';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { CONNECTION_NAME } from '../constants';

// TodoService provides an interface to the DB
@Injectable()
export class TodoService {
  constructor(
    @InjectModel(ToDo.name, CONNECTION_NAME)
    private todos: Model<ToDo>,
  ) {}
  async get(id: string) {
    return this.todos.findById(id);
  }

  async getAll() {
    return this.todos.find();
  }

  async create(toDo: CreateTodoDto) {
    await this.todos.create(toDo);
  }
  async update(id: string, toDo: UpdateTodoDto) {
    return this.todos.findOneAndUpdate({ _id: id }, toDo);
  }

  delete(id: string) {
    return this.todos.findOneAndDelete({ _id: id });
  }
}
