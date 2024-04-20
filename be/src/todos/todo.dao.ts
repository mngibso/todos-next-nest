import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDo } from './todo.db';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoDao {
  constructor(
    @InjectModel(ToDo.name, 'local')
    private toDoModel: Model<ToDo>,
  ) {}
  async get(id: string) {
    return this.toDoModel.findById(id);
  }

  async getAll() {
    return this.toDoModel.find();
  }

  async create(toDo: ToDo) {
    await this.toDoModel.create(toDo);
  }
  async update(id: string, toDo: UpdateTodoDto) {
    const updatedTodo = await this.toDoModel.findOneAndUpdate(
      { _id: id },
      toDo,
      { new: true },
    );
    if (!updatedTodo) {
      return null;
    }
    return updatedTodo;
  }

  async delete(id: string) {
    await this.toDoModel.deleteOne({ _id: id });
  }
}
