import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodoConnection } from './todo.db';
import { TodoDao } from './todo.dao';

@Module({
  imports: [TodoConnection],
  controllers: [TodosController],
  providers: [TodoDao],
})
export class TodosModule {}
