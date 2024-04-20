import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { TodoDao } from './todos/todo.dao';

@Injectable()
export class AppService {
  constructor(private readonly dataDao: TodoDao) {}

  async getAll() {
    return [{ data: '123' }];

    //return await this.dataDao.getAll()
  }
}
