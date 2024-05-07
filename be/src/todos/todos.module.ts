import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodoConnection } from './todo.db';
import { TodoService } from './todo.service';

@Module({
  imports: [TodoConnection], // import other nest modules that this module depends upon
  controllers: [TodosController], // controllers are responsible for handling http requests
  providers: [TodoService], // services that belong to the module
})
export class TodosModule {}
